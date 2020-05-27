<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    //
    protected $table = 'chat';
    protected $primaryKey = 'id_chat';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
