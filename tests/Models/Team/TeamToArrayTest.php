<?php

declare(strict_types=1);

use App\Models\Team;

test('to array', function () {
    $team = Team::factory()->create()->refresh();

    expect(array_keys($team->toArray()))->toBe([
        'id',
        'team_name',
        'created_at',
        'updated_at',
    ]);
});
