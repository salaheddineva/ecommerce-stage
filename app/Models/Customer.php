<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = ['address','phone','gender'];

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, "userable");
    }

    public function carts(): HasMany 
    {
        return $this->hasMany(Cart::class);

    }

    public function addresses(): HasMany 
    {
        return $this->hasMany(Address::class);

    }
}
