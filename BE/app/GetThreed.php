<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GetThreed extends Model
{
    protected $table = 'get_threed';
    protected $primaryKey = 'id_get_threeD';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
