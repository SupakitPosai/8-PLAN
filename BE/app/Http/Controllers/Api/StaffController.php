<?php

namespace App\Http\Controllers\Api;
use App\Staff;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $Staff = Staff::where('status_staff','=', $request->status_staff)->get();
        return response()->json($Staff);
    }
    public function getstaffall()
    {
       $Staff = Staff::all();
        return response()->json($Staff);
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
        echo file_put_contents(storage_path()."/img_staff/staff-".$date.".jpg", base64_decode($img));
        $id_member = $this->setMD5();
        $Staff = new Staff();
        $Staff->id_staff = $id_member;
        $Staff->first_name_staff_th = $request->get('first_name_staff_th');
        $Staff->first_name_staff_en = $request->get('first_name_staff_en');
        $Staff->last_name_staff_th = $request->get('last_name_staff_th');
        $Staff->last_name_staff_en = $request->get('last_name_staff_en');
        $Staff->position_staff = $request->get('position_staff');
        $Staff->resume_staff_th = $request->get('resume_staff_th');
        $Staff->resume_staff_en = $request->get('resume_staff_en');
        $Staff->img_staff = "/img_staff/staff-".$date.".jpg";
        $Staff->status_staff = "normal";

        $Staff->save();
        return $Staff;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
      
        $Staff = Staff::where('id_staff','=',$request->id_staff )->first();
        $Staff->first_name_staff_th = $request->get('first_name_staff_th');
        $Staff->first_name_staff_en = $request->get('first_name_staff_en');
        $Staff->last_name_staff_th = $request->get('last_name_staff_th');
        $Staff->last_name_staff_en = $request->get('last_name_staff_en');
        $Staff->position_staff = $request->get('position_staff');
        $Staff->resume_staff_th = $request->get('resume_staff_th');
        $Staff->resume_staff_en = $request->get('resume_staff_en');

        $Staff->save();
        return $Staff;
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
        $Staff = Staff::where('id_staff','=',$request->id_staff )->first();
        $Staff->delete();
        return $Staff;

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
