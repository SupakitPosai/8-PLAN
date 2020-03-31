<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comment;
class CommentController extends Controller
{
    //
    public function postcomment(Request $request)
    {
        
        $Comment = new Comment();       
        $Comment->id_user = $request->get('id_user');
        $Comment->id_product = $request->get('id_product');
        $Comment->text_comment = $request->get('text_comment');
        $Comment->date_comment = date("Y-m-d_H-i-s");

        $Comment->save();
        return $Comment;
    }
    public function getcomment(Request $request)
    {
        $comment =  DB::table('comment')
        ->join('user', 'comment.id_user', '=', 'user.id_user')
        // ->where('best_seller.index_best_seller','!=', 0)   
        // ->where('best_seller.status_best_seller','=', 'active')
        ->where('comment.id_product','=', $request->id_product) 
        ->orderBy('comment.date_comment', 'desc')       
        ->select('comment.*','user.*')
         ->take(15)
        ->get();
        return $comment;
    }
    public function detelecomment(Request $request)
    {
        $Comment = Comment::find($request->id);
        $Comment->delete();
  
  
        return response()->json('Users Deleted Successfully.');
    }
}
