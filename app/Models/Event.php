<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
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
    ];

    /**
     * Formats date of birth into d-m-y
     *
     * @param $value
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
}
