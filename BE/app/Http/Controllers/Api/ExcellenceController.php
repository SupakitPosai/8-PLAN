<?php

namespace App\Http\Controllers\Api;
use App\Excellence;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\ExcellenceProduct;
class ExcellenceController extends Controller
{
    //
    public function getExcellenceAll()
    {
        $Excellence = Excellence::where('status_excellence','=', 'active')->get();
        return $Excellence;
    }
    public function postExcellence(Request $request)
    {    
        
        $date=date("Y-m-d_H-i-s");
       

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_excellence/excellence-".$date.".jpg", base64_decode($img));        

        $Excellence = new Excellence();
      
        $Excellence->name_excellence = $request->get('name_excellence');
        $Excellence->status_excellence = $request->get('status_excellence');
        $Excellence->img_excellence = "/img_excellence/excellence-".$date.".jpg";

        $Excellence->save();
        return $Excellence;
    }
    public function putExcellence(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        $Excellence = Excellence::where('id_excellence','=',$request->id_excellence )->first();
        $Excellence->name_excellence = $request->get('name_excellence');       
        $Excellence->save();
        return response()->json('Users Updated Successfully.');
    }
    public function deleteExcellence(Request $request)
    {
        $ExcellenceProduct = ExcellenceProduct::where('id_excellence','=',$request->id_excellence )
        ->where('status_excellence_product','=','active')->get();
        if (count($ExcellenceProduct) == 0) {
            $Excellence = Excellence::where('id_excellence','=',$request->id_excellence )->first();
            $Excellence->status_excellence = "not active";       
            $Excellence->save();
            return response()->json('Users Updated Successfully.');
        } else {
           return response()->json('no');
        }     

        
    }
}
