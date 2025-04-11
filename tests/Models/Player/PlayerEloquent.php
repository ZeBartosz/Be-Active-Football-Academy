<?php

declare(strict_types=1);

use App\Models\Player;
use App\Models\Team;
use App\Models\User;

it('test relationship with team', function () {
    $user = User::factory()->create()->refresh();
    $team = Team::factory()->create();
    $player = Player::factory()->create([
        'team_id' => $team->id,
        'user_id' => $user->id,
    ]);

    $this->assertTrue($player->team()->exists());
    expect($player->team)->toBeInstanceOf(Team::class);
});

it('test relationship with user', function () {
    $user = User::factory()->create()->refresh();
    $team = Team::factory()->create();
    $player = Player::factory()->create([
        'user_id' => $user->id,
        'team_id' => $team->id,
    ]);

    $this->assertTrue($player->user()->exists());
    expect($player->user)->toBeInstanceOf(User::class);
});
