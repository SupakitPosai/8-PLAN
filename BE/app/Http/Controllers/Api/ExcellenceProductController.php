<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ExcellenceProduct;
use Illuminate\Support\Facades\DB;
class ExcellenceProductController extends Controller
{
    //
    public function GetExcellenceProduct(Request $request)
    {
     
      
        $ExcellenceProduct = DB::table('excellence_product')
            ->join('excellence', 'excellence_product.id_excellence', '=', 'excellence.id_excellence')   
            ->where('excellence_product.id_product','=', $request->id_product)
            ->where('excellence.status_excellence','=', 'active') 
            ->where('excellence_product.status_excellence_product','=', 'active')    
            ->select('excellence.*','excellence_product.*')
            ->get(); 
            return $ExcellenceProduct;

    }
    public function GetExcellenceProductAll(Request $request)
    {
        $ExcellenceProduct = DB::table('excellence_product')
        ->join('excellence', 'excellence_product.id_excellence', '=', 'excellence.id_excellence')   
        ->join('product', 'excellence_product.id_product', '=', 'product.id_product')
        ->where('product.status_product','=', '1')       
        ->where('excellence.status_excellence','=', 'active') 
        ->where('excellence_product.status_excellence_product','=', 'active')    
        ->select('excellence.*','excellence_product.*','product.*')
        ->get(); 
        return $ExcellenceProduct;
    }
    public function postExcellenceProduct(Request $request)
    {
        $ExcellenceProduct = new ExcellenceProduct();
       
        $ExcellenceProduct->detail_excellence_product = $request->get('detail_excellence_product');
        $ExcellenceProduct->id_product = $request->get('id_product');
        $ExcellenceProduct->id_excellence = $request->get('id_excellence');
        $ExcellenceProduct->status_excellence_product = $request->get('status_excellence_product');

        $ExcellenceProduct->save();
        return $ExcellenceProduct;
    }
    public function putExcellenceProduct(Request $request)
    { 
        $ExcellenceProduct = ExcellenceProduct::where('id_excellence_product','=',$request->id_excellence_product )->first();
       
        $ExcellenceProduct->detail_excellence_product = $request->get('detail_excellence_product');
        

        $ExcellenceProduct->save();
        return $ExcellenceProduct;
    }
    public function delExcellenceProduct(Request $request)
    { 
        $ExcellenceProduct = ExcellenceProduct::where('id_excellence_product','=',$request->id_excellence_product )->first();
       
        $ExcellenceProduct->status_excellence_product = "not active";
        

        $ExcellenceProduct->save();
        return $ExcellenceProduct;
    }
}
