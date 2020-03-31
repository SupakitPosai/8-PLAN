<?php

namespace App\Http\Controllers\Api;
use App\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $Product = Product::where('id_gallery','=', $request->id_gallery)
        ->where('status_product','=', '1')->get();
        return $Product;
    }
    public function getproductAll()
    {
        $Product = Product::where('status_product','=', '1')->get();
        return $Product;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $Product =  DB::table('product')
        ->join('gallery', 'product.id_gallery', '=', 'gallery.id_gallery')        
        ->where('product.status_product','=', '1')
        ->orderBy('product.created_product', 'desc')
        ->select('product.*','gallery.*')
        ->get();
        return $Product;
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
        $date2=date("Y-m-d H:i:s");

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_product/product-".$date.".jpg", base64_decode($img));

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file2'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_product/plan-".$date.".jpg", base64_decode($img));
        $id_member = $this->setMD5();
        $Product = new Product();
        $Product->id_product  = $id_member;
        $Product->name_product_th = $request->get('name_product_th');
        $Product->name_product_en = $request->get('name_product_en');
        $Product->price_product = $request->get('price_product');
        $Product->price_sale = $request->get('price_sale');
        $Product->detail_product = $request->get('detail_product');
        $Product->size_product = $request->get('size_product');
        $Product->excellence = $request->get('excellence');
        $Product->ready_to_build = $request->get('ready_to_build');
        $Product->type_product = $request->get('type_product');
        $Product->id_gallery = $request->get('id_gallery');
        $Product->status_product = 1;
        $Product->created_product = $date2;
        $Product->img_plan = "/img_product/plan-".$date.".jpg";       
        $Product->img_product = "/img_product/product-".$date.".jpg";

        $Product->save();
        return $Product;
        
       
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
        $Product = Product::where('id_gallery','=', $request->id_gallery)
        ->where('status_product','=', '1')
        ->take(2)
        ->get();
        return $Product;
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
        if($request->get('file2') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file2'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name2'), base64_decode($img));
        }


        $Product = Product::where('id_product','=',$request->id_product )->first();
        $Product->name_product_th = $request->get('name_product_th');
        $Product->name_product_en = $request->get('name_product_en');
        $Product->price_product = $request->get('price_product');
        $Product->price_sale = $request->get('price_sale');
        $Product->detail_product = $request->get('detail_product');
        $Product->size_product = $request->get('size_product');
        $Product->excellence = $request->get('excellence');
        $Product->ready_to_build = $request->get('ready_to_build');
        $Product->type_product = $request->get('type_product');

        $Product->save();
        return response()->json('Users Updated Successfully.');
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
        $Product = Product::where('id_product','=', $request->id_product)
        ->where('status_product','=', '1')
        ->get();
        return $Product;
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
        $Product = Product::where('id_product','=',$request->id_product )->first();
        $Product->status_product = 0;

        $Product->save();
        return response()->json('Users Updated Successfully.');
    }
    public function newupdate()
    {
        //
        $Product =  DB::table('product')
        ->join('gallery', 'product.id_gallery', '=', 'gallery.id_gallery')        
        ->where('product.status_product','=', '1')
        ->orderBy('product.created_product', 'desc')
        ->select('product.*','gallery.*')
        ->take(2)
        ->get();
        return $Product;
    }
    public function filltertype(Request $request)
    {
        $Product = Product::where('id_gallery','=', $request->id_gallery)
        ->where('type_product','>=', $request->min)
        ->where('type_product','<=', $request->max)
        ->orderBy('type_product', 'asc')
        ->where('status_product','=', '1')->get();
        return $Product;
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
