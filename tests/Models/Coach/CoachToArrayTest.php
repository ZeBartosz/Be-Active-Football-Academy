<?php

use App\Models\Coach;
use App\Models\User;

test('to array', function () {
    $user = User::factory()->create()->refresh();
    $coach = Coach::factory()->create(['user_id' => $user->id]);

    expect(array_keys($coach->toArray()))->toBe([
        'avatar',
        'about',
        'skills',
        'user_id',
        'updated_at',
        'created_at',
        'id',
    ]);
});
