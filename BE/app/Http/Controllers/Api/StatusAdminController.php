<?php

namespace App\Http\Controllers\Api;
use App\StatusAdmin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StatusAdminController extends Controller
{
    //
    public function putst(Request $request)
    {
       $StatusAdmin = StatusAdmin::where('id_status_admin','=','1' )->first();
       $StatusAdmin->status_admin = $request->get('status_admin');
    
      

       $StatusAdmin->save();
       return $StatusAdmin;
    }
}
