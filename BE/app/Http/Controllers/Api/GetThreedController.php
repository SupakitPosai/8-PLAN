<?php

namespace App\Http\Controllers\Api;
use App\GetThreed;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetThreedController extends Controller
{
    //
    public function getGetThreed()
    {
       $GetThreed = GetThreed::all();
       return $GetThreed;
    }
    public function postGetThreed(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_get_threeD/get_threeD-".$date.".jpg", base64_decode($img));
        $GetThreed = new GetThreed();
        $GetThreed->titel_get_threeD = $request->get('titel_get_threeD');
        $GetThreed->detail_get_threeD = $request->get('detail_get_threeD');     
        $GetThreed->img_get_threeD = "/img_get_threeD/get_threeD-".$date.".jpg";       
        $GetThreed->save();
        return $GetThreed;
        
    }
    public function putGetThreed(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        $GetThreed = GetThreed::where('id_get_threeD','=',$request->id_get_threeD)->first();
        $GetThreed->titel_get_threeD = $request->get('titel_get_threeD');
        $GetThreed->detail_get_threeD = $request->get('detail_get_threeD');
        $GetThreed->save();
        return response()->json('Users Updated Successfully.');
    }
    public function delGetThreed(Request $request)
    {
        $GetThreed = GetThreed::where('id_get_threeD','=',$request->id_get_threeD )->first();
        $GetThreed->delete();
        return $GetThreed;
    }
}
