<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consultant extends Model
{
    protected $table = 'consultant';
    protected $primaryKey = 'id_consultant';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
