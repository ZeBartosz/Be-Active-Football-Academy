<?php

declare(strict_types=1);

use App\Models\Event;
use Carbon\Carbon;


test('accessor formats the date correctly', function () {
    $rawDate = '2024-12-31';
    $expected = Carbon::parse($rawDate)->format('d-m-Y');

    $event = Event::factory()->create([
        'date' => $rawDate,
    ]);

    expect($event->date)->toBe($expected);
});
