<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class PhotoController extends Controller
{
    //
    public function index()
    {
        //
        $users = DB::table('product')->get();
        return $users;
    }
}
