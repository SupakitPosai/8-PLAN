<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    //
    protected $table = 'gallery';
    protected $primaryKey = 'id_gallery';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
