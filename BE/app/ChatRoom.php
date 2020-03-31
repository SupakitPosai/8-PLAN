<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    //
    protected $table = 'chat_room';
    protected $primaryKey = 'id_chat_room';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
