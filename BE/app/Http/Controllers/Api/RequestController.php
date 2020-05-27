<?php

namespace App\Http\Controllers\Api;
use App\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestController extends Controller
{
    //
    public function postRequest(Request $request)
    {
        $date2=date("Y-m-d H:i:s");
        $Requests = new Requests();        
        $Requests->name_request = $request->get('name_request');
        $Requests->emali_request = $request->get('emali_request');
        $Requests->tel_request = $request->get('tel_request');
        $Requests->message_request = $request->get('message_request');
        $Requests->date_request = $date2;
        $Requests->read_request = 1;
        $Requests->save();
        return $Requests;
    }
    public function getRequest()
    {
        $Requests = Requests::orderBy('date_request', 'desc')->get();
        return $Requests;   
    }
    public function getidReq(Request $request)
    {
        $this->putReq($request->id_request);
        $Requests = Requests::where('id_request','=',$request->id_request)->get();
        return $Requests;
    }
    public function putReq($ii)
    {
        $Requests = Requests::where('id_request','=',$ii)->first();
        $Requests->read_request = 0;
        $Requests->save();
        return $Requests;
    }
    public function getreqqq()
    {
        $Requests = Requests::sum('read_request');
        return $Requests;
    }
}
