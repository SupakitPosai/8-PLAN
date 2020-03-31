<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    //
    protected $table = 'promotion';
    protected $primaryKey = 'id_promotion';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
