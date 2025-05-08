<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Coach extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'avatar',
        'about',
        'skills',
    ];

    protected $casts = [
        'skills' => 'array',
    ];

    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
