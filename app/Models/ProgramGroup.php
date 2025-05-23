<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

final class ProgramGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'age_range',
    ];

    public function programs(): HasMany
    {
        return $this->hasMany(Program::class);
    }
}
