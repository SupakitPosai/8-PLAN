<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    //
    protected $table = 'advertisement';
    protected $primaryKey = 'id_advertisement';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
