<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

test('password is automatically hashed', function () {
    $plainPassword = 'secret-password';
    $user = User::factory()->make([
        'password' => $plainPassword,
    ]);

    expect($user->password)->not->toBe($plainPassword)
        ->and(Hash::check($plainPassword, $user->password))->toBeTrue();
});

test('email_verified_at is cast to a datetime (Carbon instance)', function () {
    $now = now();
    $user = User::factory()->make([
        'email_verified_at' => $now,
    ]);

    expect($user->email_verified_at)->toBeInstanceOf(Carbon::class);
});

test('is_admin and is_coach are cast to booleans', function () {
    $user = User::factory()->make([
        'is_admin' => 1,
        'is_coach' => 0,
    ]);

    expect($user->is_admin)->toBeTrue()
        ->and($user->is_coach)->toBeFalse();
});
