<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    //
    protected $table = 'staff';
    protected $primaryKey = 'id_staff';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
