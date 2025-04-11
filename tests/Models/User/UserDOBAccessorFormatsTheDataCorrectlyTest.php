<?php

declare(strict_types=1);

test('accessor formats the date correctly', function () {
    $rawDate = '2024-12-31';
    $expected = Carbon\Carbon::parse($rawDate)->format('d-m-Y');

    $user = App\Models\User::factory()->create([
        'date_of_birth' => $rawDate,
    ]);

    expect($user->date_of_birth)->toBe($expected);
});
