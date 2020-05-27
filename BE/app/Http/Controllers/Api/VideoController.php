<?php

namespace App\Http\Controllers\Api;
use App\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VideoController extends Controller
{
    //
    public function getvideo()
    {
        $Video = Video::orderBy('date_upload_video', 'desc')
      
        ->get();
        return $Video;
    }
    public function getshowvideos()
    {
      $Video = Video::orderBy('date_upload_video', 'desc')
      ->take(2)
      ->get();
      return $Video;
    }
    public function postvideos(Request $request)
    {
        $id_member = $this->setMD5();
        $Video = new Video();
        $Video->id_video = $id_member ;
        $Video->title_video_th = $request->get('title_video_th');
        $Video->title_video_en = $request->get('title_video_en');
        $Video->date_upload_video = date("Y-m-d H:i:s");   
        $Video->url_video = $request->get('url_video');
        $Video->save();
        return $Video;
    }
    public function putvideos(Request $request)
    {
        $Video = Video::where('id_video','=',$request->id_video)->first();
        $Video->title_video_th = $request->get('title_video_th');
        $Video->title_video_en = $request->get('title_video_en');       
        $Video->url_video = $request->get('url_video');

        $Video->save();
        return $Video;
    }
    public function delvideos(Request $request)
    {
        $Video = Video::where('id_video','=',$request->id_video)->first();      

        $Video->delete();
        return $Video;
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
