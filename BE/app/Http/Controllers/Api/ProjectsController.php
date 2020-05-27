<?php

namespace App\Http\Controllers\Api;
use App\Projects;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        return Projects::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $date=date("Y-m-d_H-i-s");    
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_projects/projects-".$date.".jpg", base64_decode($img));
        $id_member = $this->setMD5();
        $Projects = new Projects();
        $Projects->id_projects  = $id_member;
        $Projects->name_projects_th = $request->get('name_projects_th');
        $Projects->name_projects_en = $request->get('name_projects_en');
        $Projects->name_owner_th = $request->get('name_owner_th');
        $Projects->name_owner_en = $request->get('name_owner_en');
        $Projects->location_th = $request->get('location_th');
        $Projects->location_en = $request->get('location_en');
        $Projects->construction_cost = $request->get('construction_cost');
        $Projects->img_projects = "/img_projects/projects-".$date.".jpg";
        $Projects->status_projects = $request->get('status_projects');
        $Projects->area_projects = $request->get('area_projects');
        $Projects->detail_projects = $request->get('detail_projects');

        $Projects->save();
        return $Projects;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {
        //
        $project = Projects::where('status_projects','=', $request->status_projects)->get();
        return $project;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
      
        $Projects = Projects::where('id_projects','=',$request->id_projects )->first();
        $Projects->name_projects_th = $request->get('name_projects_th');
        $Projects->name_projects_en = $request->get('name_projects_en');
        $Projects->name_owner_th = $request->get('name_owner_th');
        $Projects->name_owner_en = $request->get('name_owner_en');
        $Projects->location_th = $request->get('location_th');
        $Projects->location_en = $request->get('location_en');
        $Projects->construction_cost = $request->get('construction_cost');
        $Projects->area_projects = $request->get('area_projects');
        $Projects->detail_projects = $request->get('detail_projects');
   
        $Projects->status_projects = $request->get('status_projects');
       

        $Projects->save();
        return $Projects;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $Projects = Projects::where('id_projects','=',$request->id_projects )->first();
        $Projects->delete();
        return $Projects;
    
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
