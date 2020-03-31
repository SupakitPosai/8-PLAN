<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    //
    protected $table = 'package';
    protected $primaryKey = 'id_package';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
