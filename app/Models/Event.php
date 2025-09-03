<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

final class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'title',
        'description',
        'type',
        'date',
        'time',
        'address',
        'post_code',
    ];

    protected $casts = [
        'date' => 'date',
        'time' => 'datetime:H:i',
    ];

    /**
     * Formats date of birth into d-m-y
     *
     * @return string
     */
    public function getDateAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function responsibilities(): HasMany
    {
        return $this->hasMany(Responsibility::class);
    }
}
