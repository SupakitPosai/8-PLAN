<?php

namespace App\Http\Controllers\Api;
use App\Product;
use App\ImgGallery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ImgGalleryController extends Controller
{
    //
    public function getImgGallery(Request $request)
    {
        $ImgGallery = ImgGallery::where('id_product','=', $request->id_product)
        ->where('status_img_gallery','=', $request->status_img_gallery)->get();
        return $ImgGallery;
    }
    public function getIGAd()
    {
        $product = Product::where('status_product','=', '1')->get();
  
        for ($i=0; $i < count($product) ; $i++) { 
            $ImgGallery = ImgGallery::where('id_product','=', $product[$i]->id_product)
            ->where('status_img_gallery','=', 'active')->get();
            if (count($ImgGallery)!= 0) {
                $product[$i]->imggalery1 = $ImgGallery;
            }else {
                $product[$i]->imggalery1 =[];
            }
           
        }
       
        return $product;
    }
    public function postIGAd(Request $request)
    {

        $date=date("Y-m-d_H-i-s");

        $img = str_replace('data:image/jpeg;base64,','',$request->get('file'));
        $img = str_replace(' ','+',$img);
        echo file_put_contents(storage_path()."/img_imggallery/imggallery-".$date.".jpg", base64_decode($img));

        $ImgGallery = new ImgGallery();
        $ImgGallery->name_img_gallery = $request->get('name_img_gallery');
        $ImgGallery->url_img_gallery = "/img_imggallery/imggallery-".$date.".jpg";
        $ImgGallery->id_product = $request->get('id_product');
        $ImgGallery->status_img_gallery = "active";

        $ImgGallery->save();
        return $ImgGallery;
    }
    public function delIG(Request $request)
    {
        $ImgGallery = ImgGallery::where('id_img_gallery','=', $request->id_img_gallery)->first();
        $ImgGallery->status_img_gallery = "not active";

        $ImgGallery->save();
        return $ImgGallery;
    }
}
