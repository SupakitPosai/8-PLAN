<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeGallery extends Model
{
    //
    protected $table = 'type_gallery';
    protected $primaryKey = 'id_type_gallery';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
