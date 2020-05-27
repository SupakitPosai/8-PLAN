<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StatusAdmin extends Model
{
    //
    protected $table = 'status_admin';
    protected $primaryKey = 'id_status_admin';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
