<?php

namespace App\Http\Controllers\Api;
use App\Consultant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ConsultantController extends Controller
{
    //
    public function getConsultant()
    {
        $Consultant = Consultant::all();
        return $Consultant;
    }
    public function postConsultant(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
       

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_consultant/consultant-".$date.".jpg", base64_decode($img));

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file2'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_consultant/bg-".$date.".jpg", base64_decode($img));
       
        $Consultant = new Consultant();
     
        $Consultant->titel_consultant = $request->get('titel_consultant');
        $Consultant->detail_consultant = $request->get('detail_consultant');
     
        $Consultant->img_consultant = "/img_consultant/consultant-".$date.".jpg";       
        $Consultant->img_bg_consultant = "/img_consultant/bg-".$date.".jpg";
             

        $Consultant->save();
        return $Consultant;
        
    }
    public function putConsultant(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        if($request->get('file2') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file2'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name2'), base64_decode($img));
        }


        $Consultant = Consultant::where('id_consultant','=',$request->id_consultant )->first();
        $Consultant->titel_consultant = $request->get('titel_consultant');
        $Consultant->detail_consultant = $request->get('detail_consultant');
        
       
     
        
        $Consultant->save();
        return response()->json('Users Updated Successfully.');
    }
    public function delcon(Request $request)
    {
        $Consultant = Consultant::where('id_consultant','=',$request->id_consultant )->first();       
        $Consultant->delete();
        return $Consultant;
    }
}
