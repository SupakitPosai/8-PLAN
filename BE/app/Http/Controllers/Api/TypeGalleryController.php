<?php

namespace App\Http\Controllers\Api;
use App\TypeGallery;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Gallery;
class TypeGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $TypeGallery = TypeGallery::where('status_type_gallery','=', 'active')->get();
          return $TypeGallery; 
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
        $TypeGallery = new TypeGallery();
        $TypeGallery->id_type_gallery  =$id_member;
        $TypeGallery->name_type_gallery = $request->get('name_type_gallery');
        $TypeGallery->status_type_gallery = $request->get('status_type_gallery');
        $TypeGallery->save();
        return $TypeGallery;
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
        $TypeGallery = TypeGallery::where('id_type_gallery','=',$request->id_type_gallery)->first();      
        $TypeGallery->name_type_gallery = $request->get('name_type_gallery');       
        $TypeGallery->save();
        return $TypeGallery;
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
        $Gallery = Gallery::where('id_type_gallery','=',$request->id_type_gallery)
        ->where('status_gallery','=','active')->get(); 
        if (count($Gallery) == 0) {
            $TypeGallery = TypeGallery::where('id_type_gallery','=',$request->id_type_gallery)->first();      
            $TypeGallery->status_type_gallery = 'Not Active';       
            $TypeGallery->save();
            return $TypeGallery;
        }else {
            return response()->json("no");
        }
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
