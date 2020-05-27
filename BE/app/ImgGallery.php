<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImgGallery extends Model
{
    //
    protected $table = 'img_gallery';
    protected $primaryKey = 'id_img_gallery';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
