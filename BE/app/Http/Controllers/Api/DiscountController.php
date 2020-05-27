<?php

namespace App\Http\Controllers\Api;
use App\Discount;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DiscountController extends Controller
{
    //
    public function getDiscount()
    {
        $Discount = Discount::all();
        return $Discount;
    }
    public function putDiscount(Request $request)
    {
        $Discount = Discount::where('id_discount','=',$request->id_discount)->first();
        $Discount->text_discount = $request->get('text_discount');
        
       

        $Discount->save();
        return $Discount;
    }
}
