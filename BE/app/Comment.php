<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    protected $table = 'comment';
    protected $primaryKey = 'id_comment';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
