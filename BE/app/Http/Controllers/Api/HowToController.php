<?php

namespace App\Http\Controllers\Api;
use App\HowTo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HowToController extends Controller
{
    //
    public function getHowTo()
    {
       $HowTo = HowTo::all();
       return $HowTo;
    }
    public function postHowTo(Request $request)
    {
        
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_howto/howto-".$date.".jpg", base64_decode($img));
      
        $HowTo = new HowTo();
        $HowTo->name_how_to = $request->get('name_how_to');
        $HowTo->img_how_to = "/img_howto/howto-".$date.".jpg";
        $HowTo->save();
        return $HowTo;
    }
    public function putHowTo(Request $request)
    {
        
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $HowTo = HowTo::where('id_how_to','=',$request->id_how_to)->first();
        $HowTo->name_how_to = $request->get('name_how_to');

        $HowTo->save();
        return $HowTo;
    }
    public function deleteHowTo(Request $request)
    {
        $HowTo = HowTo::where('id_how_to','=',$request->id_how_to)->first();
            

        $HowTo->delete();
        return response()->json('Users Updated Successfully.');
    }
}
