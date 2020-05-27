<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    //
    protected $table = 'discount';
    protected $primaryKey = 'id_discount';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
