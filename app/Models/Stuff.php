<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Stuff extends Model
{
    /** @use HasFactory<\Database\Factories\StuffFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'role',
        'avatar',
        'about',
        'skills',
    ];

    protected $casts = [
        'skills' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
