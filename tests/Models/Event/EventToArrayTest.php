<?php

declare(strict_types=1);

use App\Models\Event;
use App\Models\Team;

test('to array', function () {
    $team = Team::factory()->create();
    $event = Event::factory()->create(['team_id' => $team->id]);

    expect(array_keys($event->toArray()))->toBe([
        'title',
        'description',
        'type',
        'date',
        'time',
        'address',
        'post_code',
        'team_id',
        'updated_at',
        'created_at',
        'id',
    ]);
});
