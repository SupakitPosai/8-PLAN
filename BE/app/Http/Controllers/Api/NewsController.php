<?php

namespace App\Http\Controllers\Api;
use App\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    //
    public function getNews()
    {
        $News = News::orderBy('date_news', 'desc')
      
        ->get();
        return $News ;
    }
    public function getshownews()
    {
      $News = News::orderBy('date_news', 'desc')
      ->take(2)
      ->get();
      return $News;
    }
    public function postnews(Request $request)
    {
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_news/news-".$date.".jpg", base64_decode($img));
        $id_member = $this->setMD5();
        $News = new News();
        $News->id_news   = $id_member;
        $News->title_news = $request->get('title_news');
        $News->detail_news = $request->get('detail_news');
        $News->img_news = "/img_news/news-".$date.".jpg";
        $News->date_news = date("Y-m-d H:i:s");

        $News->save();
        return $News;
    }
    public function putnews(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $News = News::where('id_news','=',$request->id_news )->first();
        $News->title_news = $request->get('title_news');
        $News->detail_news = $request->get('detail_news');
       

        $News->save();
        return $News;
    }
    public function delnews(Request $request)
    {
        $News = News::where('id_news','=',$request->id_news )->first();
       
        $News->delete();
        return $News;
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
