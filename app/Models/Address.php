<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Address extends Model
{
    use HasFactory;
    protected $guarded = [];



    public function customer(): BelongsTo 
    {
        return $this->belongsTo(Customer::class);

    }
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }


}
