<?php

namespace App\Http\Controllers\Api;
use App\Statistics;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    //
    public function getStatistics()
    {
        // $Statistics = Statistics::orderBy('date_statistics', 'desc')->get();
        $Statistics =  DB::table('statistics')
        ->join('user', 'statistics.id_user', '=', 'user.id_user') 
        ->orderBy('statistics.date_statistics', 'desc')   
        ->select('statistics.*','user.*')       
        ->get();
        return $Statistics;  
    }
    public function postStatistics(Request $request)
    {
        $date2=date("Y-m-d H:i:s");
        $Statistics = new Statistics();        
        $Statistics->id_user = $request->get('id_user');       
        $Statistics->date_statistics = $date2;
        $Statistics->status_statistics = $request->get('status_statistics');
        $Statistics->save();
        return $Statistics;
    }
}
