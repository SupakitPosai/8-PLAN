<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    //
    protected $table = 'news';
    protected $primaryKey = 'id_news';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
