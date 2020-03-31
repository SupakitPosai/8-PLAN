<?php

namespace App\Http\Controllers\Api;
use App\Chat;
use App\ChatRoom;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class ChatRoomController extends Controller
{
    //
    public function getchatroom()
    {
        $ChatRoom =  DB::table('chat_room')
        ->join('user', 'chat_room.id_user', '=', 'user.id_user')        
        // ->where('chat.id_chat_room','=', $request->id_chat_room)
        ->orderBy('chat_room.date_chat_room', 'desc')
        ->select('chat_room.*','user.*')
        // ->take(2)
        ->get();
        $ii = count($ChatRoom);
        for ($i=0; $i < $ii; $i++) { 

            $Chat = Chat::where('id_chat_room','=', $ChatRoom[$i]->id_chat_room)->get();
            $i1 = count($Chat);
            $cou = 0;
            for ($iq=0; $iq < $i1; $iq++) { 
               $cou = $Chat[$iq]->read + $cou;
            }
            $ChatRoom[$i]->read = $cou;
        }

        return $ChatRoom;
    }
}
