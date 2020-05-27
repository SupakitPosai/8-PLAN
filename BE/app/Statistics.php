<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Statistics extends Model
{
    //
    protected $table = 'statistics';
    protected $primaryKey = 'id_statistics';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
