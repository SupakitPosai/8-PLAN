<?php

namespace App\Http\Controllers\Api;
use App\BestSeller;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class BestSellerController extends Controller
{
    //
    public function bestseller()
    {
        //
        $Product =  DB::table('best_seller')
        ->join('product', 'best_seller.id_product', '=', 'product.id_product')
        ->join('gallery', 'product.id_gallery', '=', 'gallery.id_gallery') 
        ->where('best_seller.index_best_seller','!=', 0)   
        ->where('best_seller.status_best_seller','=', 'active')
        ->where('product.status_product','=', '1') 
        ->orderBy('best_seller.index_best_seller', 'asc')       
        ->select('best_seller.index_best_seller','product.*','gallery.*')
        ->take(2)
        ->get();
        return $Product;
    }
    public function putbestseller(Request $request)
    {
        $BestSeller = BestSeller::where('index_best_seller','=', $request->index_best_seller)->first();
        $BestSeller->id_product=$request->get('id_product');
        $BestSeller->save();
        return $BestSeller;
    }
}
