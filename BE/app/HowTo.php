<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HowTo extends Model
{
    //
    protected $table = 'how_to';
    protected $primaryKey = 'id_how_to';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
