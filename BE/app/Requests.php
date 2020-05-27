<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
    //
    protected $table = 'request';
    protected $primaryKey = 'id_request';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
