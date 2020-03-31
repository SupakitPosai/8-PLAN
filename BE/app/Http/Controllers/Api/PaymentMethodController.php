<?php

namespace App\Http\Controllers\Api;
use App\PaymentMethod;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentMethodController extends Controller
{
    //
    public function getpaym()
    {
        $PaymentMethod = PaymentMethod::where('status_payment_method','=','active')->get();
        return $PaymentMethod;
    }
    public function postpay(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_paymentM/paymentM-".$date.".jpg", base64_decode($img));
        $PaymentMethod = new PaymentMethod();        
        $PaymentMethod->detail_payment_method = $request->get('detail_payment_method');
        $PaymentMethod->img_payment_method = "/img_paymentM/paymentM-".$date.".jpg";
        $PaymentMethod->status_payment_method = "active";
        $PaymentMethod->save();
        return $PaymentMethod;
    }
    public function putpay(Request $request)
    {
        if($request->get('file') != '' ){
            $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
            $img = str_replace(' ','+',$img);
            echo file_put_contents(storage_path().$request->get('img_name'), base64_decode($img));
        }
        $PaymentMethod = PaymentMethod::where('id_payment_method','=',$request->id_payment_method)->first(); 
        $PaymentMethod->detail_payment_method = $request->get('detail_payment_method');
    
        $PaymentMethod->save();
        return $PaymentMethod;
    }
    public function delpay(Request $request)
    {
        $PaymentMethod = PaymentMethod::where('id_payment_method','=',$request->id_payment_method)->first(); 
        $PaymentMethod->status_payment_method = "not active";
    
        $PaymentMethod->save();
        return $PaymentMethod;
    }
}
