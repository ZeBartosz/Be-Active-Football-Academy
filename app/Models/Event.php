<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
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
        'date_of_birth' => 'date',
    ];

    /**
     * Formats date of birth into d-m-y
     *
     * @param $value
     * @return string
     */
    public function getDateOfBirthAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }
}
