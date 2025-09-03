<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Program extends Model
{
    /** @use HasFactory<\Database\Factories\ProgramFactory> */
    use HasFactory;

    protected $fillable = [
        'program_group_id',
        'title',
        'description',
        'price',
    ];

    public function programGroup(): BelongsTo
    {
        return $this->belongsTo(ProgramGroup::class);
    }
}
