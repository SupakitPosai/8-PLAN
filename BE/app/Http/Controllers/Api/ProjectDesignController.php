<?php

namespace App\Http\Controllers\Api;
use App\ProjectDesign;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectDesignController extends Controller
{
    //
    public function getProjectDesign()
    {
        $ProjectDesign = ProjectDesign::all();
        return $ProjectDesign;
    }
    public function postProjectDesign(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_project_design/project_design-".$date.".jpg", base64_decode($img));
        $ProjectDesign = new ProjectDesign();
        $ProjectDesign->titel_project_design = $request->get('titel_project_design');
        $ProjectDesign->detail_project_design = $request->get('detail_project_design');     
        $ProjectDesign->img_project_design = "/img_project_design/project_design-".$date.".jpg";       
        $ProjectDesign->save();
        return $ProjectDesign;
        
    }
    public function putProjectDesign(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        $ProjectDesign = ProjectDesign::where('id_project_design','=',$request->id_project_design )->first();
        $ProjectDesign->titel_project_design = $request->get('titel_project_design');
        $ProjectDesign->detail_project_design = $request->get('detail_project_design');     
        $ProjectDesign->save();
        return response()->json('Users Updated Successfully.');
    }
    public function delProjectDesign(Request $request)
    {
        $ProjectDesign = ProjectDesign::where('id_project_design','=',$request->id_project_design )->first();
        $ProjectDesign->delete();
        return $ProjectDesign;
    }
}
