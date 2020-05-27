<?php

namespace App\Http\Controllers\Api;
use App\Advertisement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdvertisementControllers extends Controller
{
    //
    public function getAdvertisement()
    {
       $Advertisement = Advertisement::all();
       return $Advertisement;
    }
    public function postAdvertisement(Request $request)
    {
        
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_ad/ad-".$date.".jpg", base64_decode($img));
      
        $Advertisement = new Advertisement();
        $Advertisement->name_advertisement = $request->get('name_advertisement');
        $Advertisement->img_advertisement = "/img_ad/ad-".$date.".jpg";
        $Advertisement->url_advertisement = $request->get('url_advertisement');
        $Advertisement->save();
        return $Advertisement;
    }
    public function putAdvertisement(Request $request)
    {
        
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $Advertisement = Advertisement::where('id_advertisement','=',$request->id_advertisement)->first();
        $Advertisement->name_advertisement = $request->get('name_advertisement');
        $Advertisement->url_advertisement = $request->get('url_advertisement');    

        $Advertisement->save();
        return $Advertisement;
    }
    public function deleteAdvertisement(Request $request)
    {
        $Advertisement = Advertisement::where('id_advertisement','=',$request->id_advertisement)->first();
            

        $Advertisement->delete();
        return response()->json('Users Updated Successfully.');
    }
}
