<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $table = 'video';
    protected $primaryKey = 'id_video';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
