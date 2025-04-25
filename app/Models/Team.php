<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Team extends Model
{
    /** @use HasFactory<\Database\Factories\TeamFactory> */
    use HasFactory;

    protected $fillable = [
        'team_name',
    ];

    public function players(): HasMany
    {
        return $this->hasMany(Player::class);
    }

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }
}
