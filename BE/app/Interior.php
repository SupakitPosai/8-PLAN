<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Interior extends Model
{
    //
    protected $table = 'interior';
    protected $primaryKey = 'id_interior';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
