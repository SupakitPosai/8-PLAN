<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Promotion;
use Illuminate\Support\Facades\DB;
class PromotionController extends Controller
{
    //
    public function Getpromotion(){
        $promotion = DB::table('promotion')
            ->join('product', 'promotion.id_product', '=', 'product.id_product')   
            ->where('status_promotion','=', 'active')    
            ->where('status_product','=', '1')     
            ->select('promotion.*','product.*')
            ->get(); 
            return $promotion;
    }
    public function putpromotion(Request $request)
    {
        $Promotion = Promotion::where('id_promotion','=', 1)->first();
        $Promotion->id_product=$request->get('id_product');
        $Promotion->save();
        return $Promotion;
    }
}
