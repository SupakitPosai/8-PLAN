<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BestSeller extends Model
{
    //
    protected $table = 'best_seller';
    protected $primaryKey = 'id_best_seller';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
