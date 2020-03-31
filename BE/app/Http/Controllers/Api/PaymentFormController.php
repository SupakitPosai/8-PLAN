<?php

namespace App\Http\Controllers\Api;
use App\PaymentForm;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class PaymentFormController extends Controller
{
    //
    public function getPaymentForm(Request $request)
    {
        $PaymentForm =  DB::table('payment_form')
        ->join('user', 'payment_form.id_user', '=', 'user.id_user')        
        ->where('payment_form.id_user','=', $request->id_user)
        // ->orderBy('product.created_product', 'desc')
        ->select('payment_form.*','user.*')
       
        ->get();
        return $PaymentForm;
    }
    public function putPaymentForm(Request $request)
    {
        $PaymentForm = PaymentForm::where('id_user','=',$request->id_user)->first();      
        $PaymentForm->full_name = $request->get('full_name');
        $PaymentForm->address = $request->get('address');
        $PaymentForm->phone_number = $request->get('phone_number');
        $PaymentForm->province = $request->get('province');
        $PaymentForm->district = $request->get('district');
        $PaymentForm->postal_code = $request->get('postal_code');
        $PaymentForm->country = $request->get('country');
        $PaymentForm->save();
        return $PaymentForm;
    }
    public function postPaymentForm(Request $request)
    {
        $PaymentForm = new PaymentForm();       
        $PaymentForm->full_name = $request->get('full_name');
        $PaymentForm->address = $request->get('address');
        $PaymentForm->phone_number = $request->get('phone_number');
        $PaymentForm->province = $request->get('province');
        $PaymentForm->district = $request->get('district');
        $PaymentForm->postal_code = $request->get('postal_code');
        $PaymentForm->country = $request->get('country');
        $PaymentForm->id_user = $request->get('id_user');
        $PaymentForm->save();
        return $PaymentForm;
    }
}
