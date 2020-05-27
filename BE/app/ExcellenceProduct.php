<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExcellenceProduct extends Model
{
    //
    protected $table = 'excellence_product';
    protected $primaryKey = 'id_excellence_product';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
