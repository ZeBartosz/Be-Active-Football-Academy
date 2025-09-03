<?php

declare(strict_types=1);

use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;

test('date_of_birth accessor returns formatted date', function () {
    $rawDate = '2024-12-31';
    $expected = Carbon::parse($rawDate)->format('d-m-Y');

    $user = User::factory()->create();
    $team = Team::factory()->create();

    $player = Player::factory()->create([
        'date_of_birth' => $rawDate,
        'user_id' => $user->id,
        'team_id' => $team->id,
    ]);

    expect($player->date_of_birth)->toBe($expected);
});
