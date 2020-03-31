<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Excellence extends Model
{
    //
    protected $table = 'excellence';
    protected $primaryKey = 'id_excellence';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
