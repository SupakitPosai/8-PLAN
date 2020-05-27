<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectDesign extends Model
{
    //
    protected $table = 'project_design';
    protected $primaryKey = 'id_project_design';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
