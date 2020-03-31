<?php

namespace App\Http\Controllers\Api;
use App\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class OrderController extends Controller
{
    //
    public function getorder()
    {
        $Order =  DB::table('order')
        ->join('product', 'order.id_product', '=', 'product.id_product') 
        ->join('user', 'order.id_user', '=', 'user.id_user')   
        ->join('payment_form', 'order.id_payment_form', '=', 'payment_form.id_payment_form')       
        ->join('payment_method', 'order.id_payment_method', '=', 'payment_method.id_payment_method')
        // ->where('product.status_product','=', '1')
        // ->orderBy('product.created_product', 'desc')
        ->select('order.*','product.*','user.*','payment_form.*','payment_method.*')
        ->get();
        return $Order;
    }
    public function getorderBill(Request $request)
    {
        $Order =  DB::table('order')
        ->join('product', 'order.id_product', '=', 'product.id_product') 
        ->join('user', 'order.id_user', '=', 'user.id_user')   
        ->join('payment_form', 'order.id_payment_form', '=', 'payment_form.id_payment_form')       
        ->join('payment_method', 'order.id_payment_method', '=', 'payment_method.id_payment_method')
        ->where('order.no_order','=', $request->no_order)
        // ->orderBy('product.created_product', 'desc')
        ->select('order.*','product.*','user.*','payment_form.*','payment_method.*')
        ->get();

        $image_source = storage_path() . $Order[0]->img_product;
        $image = fopen($image_source, 'r');
        $image_string = fread($image, filesize($image_source));
        $img = base64_encode($image_string);
        $Order[0]->img_product = 'data:image/png;base64,' . $img;
        
        $image_source2 = storage_path() . $Order[0]->img_payment_method;
        $image2 = fopen($image_source2, 'r');
        $image_string2 = fread($image2, filesize($image_source2));
        $img2 = base64_encode($image_string2);
        $Order[0]->img_payment_method = 'data:image/png;base64,' . $img2;

        return $Order;
    }
    public function postorder(Request $request)
    {
        $id_member = $this->setMD5();
        $Order = new Order();
        $Order->id_order   = $id_member;
        $Order->no_order = $request->get('no_order');
        $Order->id_product = $request->get('id_product');
        $Order->status_order = $request->get('status_order');
        $Order->id_user = $request->get('id_user');
        $Order->id_payment_form = $request->get('id_payment_form');
        $Order->id_payment_method = $request->get('id_payment_method');
        $Order->date_order = date("Y-m-d H:i:s");
     

        $Order->save();
        return $Order;
    }
    public function getorderuser(Request $request)
    {
        $Order =  DB::table('order')
        ->join('product', 'order.id_product', '=', 'product.id_product') 
        ->join('user', 'order.id_user', '=', 'user.id_user')   
        ->join('payment_form', 'order.id_payment_form', '=', 'payment_form.id_payment_form')       
        ->join('payment_method', 'order.id_payment_method', '=', 'payment_method.id_payment_method')
        ->where('order.id_user','=', $request->id_user)
        // ->orderBy('product.created_product', 'desc')
        ->select('order.*','product.*','user.*','payment_form.*','payment_method.*')
        ->get();
        return $Order;
    }
    public function putorder(Request $request)
    {
        $date=date("Y-m-d_H-i-s");
  

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_pay/pay-".$date.".jpg", base64_decode($img));

        $Order = Order::where('id_order','=',$request->id_order )->first();
       
    
        $Order->date_payment = $request->get('date_payment');
        $Order->img_order = "/img_pay/pay-".$date.".jpg";
        $Order->status_order = $request->get('status_order');
      
     

        $Order->save();
        return $Order;
    }
    public function puttackorder(Request $request)
    {   
        $Order = Order::where('id_order','=',$request->id_order )->first();   
        $Order->tack_num = $request->get('tack_num');     
        $Order->status_order = $request->get('status_order');
        $Order->save();
        return $Order;
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
