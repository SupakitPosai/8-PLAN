<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
    protected $table = 'event';
    protected $primaryKey = 'id_event';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
