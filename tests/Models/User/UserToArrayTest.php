<?php

declare(strict_types=1);

namespace Tests\Unit\Models;

use App\Models\User;

test('to array', function () {
    $user = User::factory()->create()->refresh();

    expect(array_keys($user->toArray()))->toBe([
        'id',
        'first_name',
        'last_name',
        'email',
        'number',
        'address',
        'post_code',
        'date_of_birth',
        'is_admin',
        'is_coach',
        'created_at',
        'updated_at',
    ]);
});
