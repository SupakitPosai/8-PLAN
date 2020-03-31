<?php

namespace App\Http\Controllers\Api;
use App\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    //
    public function bannerpage(Request $request)
    {
       $Banner = Banner::where('page','=',$request->page )->get();
        return $Banner;
    }
    public function getbanner()
    {
        $Banner = Banner::all();
        return $Banner;
    }
    public function postbanner(Request $request)
    {
        
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_banner/banner-".$date.".jpg", base64_decode($img));
      
        $Banner = new Banner();
        $Banner->name_banner = $request->get('name_banner');
        $Banner->img_banner = "/img_banner/banner-".$date.".jpg";
        $Banner->page = $request->get('page');
        $Banner->save();
        return $Banner;
    }
    public function putbanner(Request $request)
    {
        
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $Banner = Banner::where('id_banner','=',$request->id_banner )->first();
        $Banner->name_banner = $request->get('name_banner');      

        $Banner->save();
        return $Banner;
    }
    public function deleteban(Request $request)
    {
        $Banner = Banner::where('id_banner','=',$request->id_banner )->first();
            

        $Banner->delete();
        return response()->json('Users Updated Successfully.');
    }
}
