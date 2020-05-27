<?php

namespace App\Http\Controllers\Api;
use App\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    //
    public function getExortCus()
    {
        $Users = Users::where('type_user','=', 'user')
       ->get();
        return $Users;
    }
    public function GetUsers(Request $request)
    {
        $Users = Users::where('username','=', $request->username)
        ->where('password','=', $request->password)->get();
        return $Users;
    }
    public function Getusername(Request $request)
    {
        $Users = Users::where('username','=', $request->username)->get();
        return $Users;
    }
    public function Getemail(Request $request)
    {
        $Users = Users::where('email_user','=', $request->email_user)->get();
        return $Users;
    }
    public function Postuser(Request $request)
    {
        
        $id_member = $this->setMD5();
        $date=date("Y-m-d_H-i-s");
        
        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_user/user-".$date.".jpg", base64_decode($img));

        $Users = new Users();
        $Users->id_user =$id_member;
        $Users->f_name_user = $request->get('f_name_user');
        $Users->l_name_user = $request->get('l_name_user');
        $Users->address_user = $request->get('address_user');
        // $Users->id_card = $request->get('id_card');
        $Users->date_year = $request->get('date_year');
        $Users->email_user = $request->get('email_user');
        $Users->tel_user = $request->get('tel_user');
        $Users->username = $request->get('username');
        $Users->password = $request->get('password');
        $Users->type_user = $request->get('type_user');     
        $Users->img_User = "/img_user/user-".$date.".jpg";
       

        $Users->save();
        return $Users;
        // return ($request->get('file'));
    }
    public function getadmin()
    {
        $Users = Users::where('type_user','=', 'admin')->get();
        return $Users;
    }
    public function postadmin(Request $request)
    {
        $id_member = $this->setMD5();
        $Users = new Users();
        $Users->id_user =$id_member;
        $Users->f_name_user = $request->get('f_name_user');
        $Users->l_name_user = $request->get('l_name_user');
        $Users->email_user = $request->get('email_user');
        $Users->tel_user = $request->get('tel_user');
        $Users->username = $request->get('username');
        $Users->password = $request->get('password');
        $Users->type_user ="admin";     
       
       

        $Users->save();
        return $Users;
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
