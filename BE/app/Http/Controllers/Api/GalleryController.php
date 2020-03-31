<?php

namespace App\Http\Controllers\Api;
use App\Gallery;
use App\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $Gallery = Gallery::where('id_type_gallery','=', $request->id_type_gallery)
        ->where('status_gallery','=', 'active')->get();
        return $Gallery;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $gallery =  DB::table('gallery')
        ->join('type_gallery', 'gallery.id_type_gallery', '=', 'type_gallery.id_type_gallery')        
        ->where('gallery.status_gallery','=', 'active')
        // ->orderBy('product.created_product', 'desc')
        ->select('gallery.*','type_gallery.*')
       
        ->get();
        return $gallery;
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
        $date=date("Y-m-d_H-i-s");
        
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_gallery/gallery-".$date.".jpg", base64_decode($img));

        $Gallery = new Gallery();
        $Gallery->id_gallery = $id_member;
        $Gallery->name_gallery = $request->get('name_gallery');
        $Gallery->img_gallery = "/img_gallery/gallery-".$date.".jpg";
        $Gallery->id_type_gallery = $request->get('id_type_gallery');
        $Gallery->status_gallery = $request->get('status_gallery');
        $Gallery->save();
        return $Gallery;
       
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
        $Gallery = Gallery::where('id_gallery','=', $request->id_gallery)
        ->where('status_gallery','=', 'active')->get();
        return $Gallery;
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
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        $Gallery = Gallery::where('id_gallery','=',$request->id_gallery )->first();
        $Gallery->name_gallery = $request->get('name_gallery');
        $Gallery->status_gallery = $request->get('status_gallery');       
        $Gallery->save();
        return response()->json('Users Updated Successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update()
    {
        //
         $Gallery = Gallery::where('status_gallery','=', 'active')->get();
      
        return $Gallery;
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
        $Product = Product::where('id_gallery','=', $request->id_gallery)
        ->where('status_product','=', '1')->get();
        if (count($Product) == 0) {           
            $Gallery = Gallery::where('id_gallery','=',$request->id_gallery )->first();
            $Gallery->status_gallery = "not active";       
            $Gallery->save();
            return response()->json('Users Updated Successfully.');
        } else {
            return response()->json('no');
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
