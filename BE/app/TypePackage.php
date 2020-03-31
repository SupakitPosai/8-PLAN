<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypePackage extends Model
{
    //
    protected $table = 'type_package';
    protected $primaryKey = 'id_type_package';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
