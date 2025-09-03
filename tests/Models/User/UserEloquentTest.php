<?php

declare(strict_types=1);

namespace Tests\Models\User;

use App\Models\Coach;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;

it('can fetch the coach for a user', function () {
    $user = User::factory()->create();

    $coach = Coach::create([
        'user_id' => $user->id,
    ]);

    $this->assertInstanceOf(Coach::class, $user->coach);
    $this->assertTrue($user->coach()->exists());
});

it('can fetch players for a user', function () {
    $user = User::factory()->create();
    $team = Team::create(['team_name' => 'Test TeamTest']);

    $players = Player::factory()->count(3)->create([
        'team_id' => $team->id,
        'user_id' => $user->id,
    ]);

    $this->assertCount(3, $user->players);
    $this->assertTrue($user->players()->exists());
});
