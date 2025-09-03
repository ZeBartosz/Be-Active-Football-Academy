<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class ContactInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'email',
        'number',
        'address_line1',
        'address_line2',
    ];
}
