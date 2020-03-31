<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemPackage extends Model
{
    //
    protected $table = 'item_package';
    protected $primaryKey = 'id_item_package';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'string';
}
