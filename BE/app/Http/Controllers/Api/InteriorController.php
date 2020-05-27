<?php

namespace App\Http\Controllers\Api;
use App\Interior;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InteriorController extends Controller
{
    //
    public function getInterior()
    {
       $Interior = Interior::all();
       return $Interior;
    }
    public function postInterior(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
       

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_interior/interior-".$date.".jpg", base64_decode($img));

      
       
        $Interior = new Interior();
     
        $Interior->titel_interior = $request->get('titel_interior');
        $Interior->detail_interior = $request->get('detail_interior');
     
        $Interior->img_interior = "/img_interior/interior-".$date.".jpg";       
             

        $Interior->save();
        return $Interior;
        
    }
    public function putInterior(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        


        $Interior = Interior::where('id_interior','=',$request->id_interior )->first();
        $Interior->titel_interior = $request->get('titel_interior');
        $Interior->detail_interior = $request->get('detail_interior');
        
       
     
        
        $Interior->save();
        return response()->json('Users Updated Successfully.');
    }
    public function delInterior(Request $request)
    {
        $Interior = Interior::where('id_interior','=',$request->id_interior )->first();
        $Interior->delete();
        return $Interior;
    }
}
