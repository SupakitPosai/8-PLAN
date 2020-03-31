<?php

namespace App\Http\Controllers\Api;
use App\Chat;
use App\ChatRoom;
use App\StatusAdmin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
class ChatController extends Controller
{
    //
    public function getchat(Request $request)
    {
        $Chat =  DB::table('chat')
        ->join('user', 'chat.id_user', '=', 'user.id_user')        
        ->where('chat.id_chat_room','=', $request->id_chat_room)
        ->orderBy('chat.date_chat', 'asc')
        ->select('chat.*','user.*')
        // ->take(2)
        ->get();
        return $Chat;
    }
    public function getchatuser(Request $request)
    {
        $ChatRoom = ChatRoom::where('id_user','=', $request->id_user)->get();
        
        $Chat =  DB::table('chat')
        ->join('user', 'chat.id_user', '=', 'user.id_user')      
        ->where('chat.id_chat_room','=', $ChatRoom[0]->id_chat_room )
        ->orderBy('chat.date_chat', 'asc')
        ->select('chat.*','user.*')
        // ->take(2)
        ->get();
        return $Chat;
    }
    public function putread(Request $request)
    {
        $Chat = Chat::where('id_chat_room','=', $request->id_chat_room)
        ->where('read','=', 1)
        ->get();     
        $ii = count($Chat);
        for ($i=0; $i < $ii; $i++) { 
            $Chat1 = Chat::where('id_chat','=', $Chat[$i]->id_chat)->first();
            $Chat1->read = 0; 
            $Chat1->save();
        }
        
        return $Chat;
    }
    public function postchatAdmin(Request $request)
    {
        $date = date("Y-m-d H:i:s");
        $ChatRoom = ChatRoom::where('id_chat_room','=', $request->id_chat_room)->first();
        $ChatRoom->date_chat_room = $date;
        $ChatRoom->save();

        $Chat = new Chat();
        $Chat->id_chat_room = $request->get('id_chat_room');
        $Chat->message = $request->get('message');
        $Chat->id_user = $request->get('id_user');
        $Chat->read = 0;
        $Chat->date_chat = $date;
        
        $Chat->save();
        return response()->json('Users Updated Successfully.');
    }
    public function postchatdb(Request $request)
    {
        $date = date("Y-m-d H:i:s");
        $ChatRoom = ChatRoom::where('id_user','=', $request->id_user)->get();
        if (count($ChatRoom)== 0 ) {
            //post
            $PostChatRoom = new ChatRoom();
            $PostChatRoom->id_user = $request->get('id_user');
            $PostChatRoom->date_chat_room = $date;
            $PostChatRoom->save();
            $Chat = new Chat();
            $Chat->id_chat_room = $PostChatRoom->id_chat_room;
            $Chat->message = $request->get('message');
            $Chat->id_user = $request->get('id_user');
            $Chat->read = 1;
            $Chat->date_chat = $date;
            $Chat->save();
            $this->chatbot( $request->id_user ,$request->get('message') );
            return "post";
        } else {
           //put
            $PutChatRoom = ChatRoom::where('id_user','=', $request->id_user)->first();
            $PutChatRoom->date_chat_room = $date;
            $PutChatRoom->save();
            $Chat = new Chat();
            $Chat->id_chat_room = $PutChatRoom->id_chat_room;
            $Chat->message = $request->get('message');
            $Chat->id_user = $request->get('id_user');
            $Chat->read = 1;
            $Chat->date_chat = $date;
            $Chat->save();
            $this->chatbot( $request->id_user ,$request->get('message') );
            return "put";
        }
        

        
    }
    public function chatbot($id_user,$mes)
    {
        $date = date("Y-m-d H:i:s");
        $StatusAdmin = StatusAdmin::where('id_status_admin','=','1' )->get();

        if ($StatusAdmin[0]->status_admin == 0) {
         
            if ($mes == 'สวัสดีครับ') {
                $PutChatRoom1 = ChatRoom::where('id_user','=', $id_user)->first();
                $PutChatRoom1->date_chat_room = $date;
                $PutChatRoom1->save();
                $Chat1 = new Chat();
                $Chat1->id_chat_room = $PutChatRoom1->id_chat_room;
                $Chat1->message = "สวัสดีครับ ยินดีให้บริการครับ !!";
                $Chat1->id_user = "fe3fe3c3cr34";
                $Chat1->date_chat = $date;
                $Chat->read = 0;
                $Chat1->save();
                   
            } else {
                $PutChatRoom1 = ChatRoom::where('id_user','=', $id_user)->first();
                $PutChatRoom1->date_chat_room = $date;
                $PutChatRoom1->save();
                $Chat1 = new Chat();
                $Chat1->id_chat_room = $PutChatRoom1->id_chat_room;
                $Chat1->message = "ยินดีให้บริการครับ กรุณารอแอดมินต่อกต่อกลับครับ";
                $Chat1->id_user = "fe3fe3c3cr34";
                $Chat1->date_chat = $date;
                $Chat->read = 0;
                $Chat1->save();
                
            }
           
        }
    }
}
