<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    //
    protected $table = 'projects';
    protected $primaryKey = 'id_projects';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
