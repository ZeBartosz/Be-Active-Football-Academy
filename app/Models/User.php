<?php

declare(strict_types=1);

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

final class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'number',
        'address',
        'post_code',
        'date_of_birth',
        'is_admin',
        'is_coach',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'is_admin' => 'boolean',
        'is_coach' => 'boolean',
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'date',
    ];

    public function coach(): HasOne
    {
        return $this->HasOne(Coach::class);
    }

    public function players(): HasMany
    {
        return $this->hasMany(Player::class);
    }

    public function getDateOfBirthAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }
}
