<?php

namespace App\Http\Controllers\Api;
use App\ItemPackage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ItemPackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $ip = DB::table('item_package')
        ->join('package', 'item_package.id_package', '=', 'package.id_package')  
        ->join('type_package', 'package.id_type_package', '=', 'type_package.id_type_package')
        ->where('item_package.id_product','=', $request->id_product)
        // // ->where('shop.id_shop','=',"shop.id_shop")
        ->where('item_package.status_item_package','=','active')       
        ->select('type_package.id_type_package','type_package.name_type_package_th','type_package.name_type_package_en')
        ->distinct('type_package.id_type_package')
        ->get();
          
       // $cartAll_ID = Cart::where('id_user','=', $request->id_user)->where('status','=','ยืนยัน')->get();
        return $ip;
    }
    public function getItemPackage()
    {
        $ip = DB::table('item_package')
        ->join('package', 'item_package.id_package', '=', 'package.id_package')  
        ->join('product', 'item_package.id_product', '=', 'product.id_product')
        ->where('package.status_package','=', 'active')
        ->where('product.status_product','=','1')      
        ->where('item_package.status_item_package','=','active')       
        ->select('item_package.*','package.*','product.*')       
        ->get();
          
       
        return $ip;
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
        echo file_put_contents(storage_path()."/item_package/item_package-".$date.".jpg", base64_decode($img));

        $id_member = $this->setMD5();
        $ItemPackage = new ItemPackage();
        $ItemPackage->id_item_package = $id_member;
        $ItemPackage->name_item_package = $request->get('name_item_package');
        $ItemPackage->price_item = $request->get('price_item');
        $ItemPackage->file_item_package = "/item_package/item_package-".$date.".jpg";
        $ItemPackage->id_package = $request->get('id_package');
        $ItemPackage->id_product = $request->get('id_product');
        $ItemPackage->status_item_package = $request->get('status_item_package');
        $ItemPackage->save();
        return $ItemPackage;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        //
        $ip = DB::table('item_package')
        ->join('package', 'item_package.id_package', '=', 'package.id_package')  
        ->join('type_package', 'package.id_type_package', '=', 'type_package.id_type_package')
        ->where('item_package.id_product','=', $request->id_product)
        ->where('type_package.id_type_package','=',$request->id_type_package)
        ->where('package.status_package','=','active')       
        ->select('package.id_package','package.name_package_th','package.name_package_en')
        ->distinct('package.id_package')
        ->get();
          
       // $cartAll_ID = Cart::where('id_user','=', $request->id_user)->where('status','=','ยืนยัน')->get();
        return $ip;
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


        $ItemPackage = ItemPackage::where('id_item_package','=',$request->id_item_package )->first();
        $ItemPackage->name_item_package = $request->get('name_item_package');
        $ItemPackage->price_item = $request->get('price_item');

        $ItemPackage->save();
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
        $item = ItemPackage::where('id_product','=',$request->id_product) 
        ->where('id_package','=',$request->id_package) 
        ->where('status_item_package','=','active')->get(); 
        return $item;
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
        $ItemPackage = ItemPackage::where('id_item_package','=',$request->id_item_package )->first();
        $ItemPackage->status_item_package = "not active";
       

        $ItemPackage->save();
        return response()->json('Users Updated Successfully.');

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
