<?php

namespace App\Http\Controllers\Api;
use App\TypePackage;
use App\Package;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TypePackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $TypePackage = TypePackage::where('status_type_package','=', 'active')->get();
        return $TypePackage;
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
        $id_member = $this->setMD5();
        $TypePackage = new TypePackage();
        $TypePackage->id_type_package    = $id_member;
        $TypePackage->name_type_package_th = $request->get('name_type_package_th');
        $TypePackage->name_type_package_en = $request->get('name_type_package_en');
        $TypePackage->status_type_package = $request->get('status_type_package');
        $TypePackage->save();
        return $TypePackage;
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
    public function edit(Request $request)
    {
        //
        $TypePackage =TypePackage::where('id_type_package','=',$request->id_type_package)->first();       
        $TypePackage->name_type_package_th = $request->get('name_type_package_th');
        $TypePackage->name_type_package_en = $request->get('name_type_package_en');
       
        $TypePackage->save();
        return $TypePackage;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
    public function delete(Request $request)
    {
        //
        $Package=Package::where('id_type_package','=',$request->id_type_package)
        ->where('status_package','=','active')->get();
        if (count($Package) == 0) {
            $TypePackage =TypePackage::where('id_type_package','=',$request->id_type_package)->first();       
            $TypePackage->status_type_package = "not active";
            $TypePackage->save();
            return $TypePackage;
        } else {
            return response()->json('no');
        }
        
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
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
