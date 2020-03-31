<?php

namespace App\Http\Controllers\Api;
use App\Package;
use App\ItemPackage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 
        $Package = DB::table('package')
        ->join('type_package', 'package.id_type_package', '=', 'type_package.id_type_package')   
      
        ->where('package.status_package','=', 'active')       
        ->where('type_package.status_type_package','=', 'active')
        // ->where('excellence.status_excellence','=', 'active') 
        // ->where('excellence_product.status_excellence_product','=', 'active')    
        ->select('package.*','type_package.*')
        ->get(); 
        return $Package;
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
        $Package = new Package();
        $Package->id_package   = $id_member;
        $Package->name_package_th = $request->get('name_package_th');
        $Package->name_package_en = $request->get('name_package_en');
        $Package->id_type_package = $request->get('id_type_package');
        $Package->status_package = $request->get('status_package');
        $Package->save();
        return $Package;
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
        $Package = Package::where('id_package','=',$request->id_package)->first();      
        $Package->name_package_th = $request->get('name_package_th');
        $Package->name_package_en = $request->get('name_package_en');
    
        $Package->save();
        return $Package;
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $ItemPackage = ItemPackage::where('id_package','=',$request->id_package)
        ->where('status_item_package','=','active')->get();
        if (count($ItemPackage)==0) {
           $Package = Package::where('id_package','=',$request->id_package)->first();
            $Package->status_package = "not active";    
            $Package->save();
            return $Package;
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
