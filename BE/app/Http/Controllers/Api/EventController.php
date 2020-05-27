<?php

namespace App\Http\Controllers\Api;
use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    //
    public function getEvent()
    {
      $Event = Event::orderBy('date_event', 'desc')
     
      ->get();
      return $Event;
    }
    public function getshoweven()
    {
      $Event = Event::orderBy('date_event', 'desc')
      ->take(2)
      ->get();
      return $Event;
    }
    public function postevent(Request $request)
    {
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_event/event-".$date.".jpg", base64_decode($img));
        $id_member = $this->setMD5();
        $Event = new Event();
        $Event->id_event   = $id_member;
        $Event->title_event = $request->get('title_event');
        $Event->detail_event = $request->get('detail_event');
        $Event->img_event = "/img_event/event-".$date.".jpg";
        $Event->date_event = date("Y-m-d H:i:s");

        $Event->save();
        return $Event;
    }
    public function putevent(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $Event = Event::where('id_event','=',$request->id_event )->first();
        $Event->title_event = $request->get('title_event');
        $Event->detail_event = $request->get('detail_event');
       

        $Event->save();
        return $Event;
    }
    public function delevent(Request $request)
    {
      $Event = Event::where('id_event','=',$request->id_event )->first();
       
        $Event->delete();
        return $Event;
    }
    public function setMD5(){

        $passuniq = uniqid();
        $passmd5 = md5($passuniq);
    
        $sumlenght = strlen($passmd5);#num passmd5
    
        $letter_pre = chr(rand(97,122));#set char for prefix
    
        $letter_post = chr(rand(97,122));#set char for postfix
    
        $letter_mid = chr(rand(97,122));#set char for middle string
    
        $num_rand = rand(0,$sumlenght);#random for cut passmd5
    
        $cut_pre = substr($passmd5,0,$num_rand);#cutmd5 start 0 stop $numrand
        $setmid = $cut_pre.$letter_mid;#set pre string + char middle
    
        $cut_post = substr($passmd5,$num_rand, $sumlenght+1);
    
        $set_modify_md5 = $letter_pre.$setmid.$cut_post.$letter_post;
        return $set_modify_md5;
    
    }
}
