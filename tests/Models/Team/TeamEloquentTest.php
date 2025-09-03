<?php

declare(strict_types=1);

use App\Models\Player;
use App\Models\Team;
use App\Models\User;

it('test relationship with players', function () {
    $user = User::factory()->create();
    $team = Team::create(['team_name' => 'test']);

    $player = Player::factory()->create([
        'team_id' => $team->id,
        'user_id' => $user->id,
    ]);

    $this->assertTrue($team->players()->exists());
});
