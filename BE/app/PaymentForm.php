<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentForm extends Model
{
    //
    protected $table = 'payment_form';
    protected $primaryKey = 'id_payment_form';

    //public $incrementing = false;
    
    public $timestamps = false;
    protected $keyType = 'int';
}
