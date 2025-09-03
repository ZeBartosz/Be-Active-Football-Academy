<?php

declare(strict_types=1);

use App\Models\Player;
use App\Models\Team;
use App\Models\User;

test('to array returns the expected keys', function () {

    $user = User::factory()->create();
    $team = Team::factory()->create();

    $player = Player::factory()->create([
        'user_id' => $user->id,
        'team_id' => $team->id,
    ]);

    expect(array_keys($player->toArray()))->toBe([
        'first_name',
        'last_name',
        'address',
        'post_code',
        'date_of_birth',
        'user_id',
        'team_id',
        'updated_at',
        'created_at',
        'id',
    ]);
});

// TODO: figure out why coverage only works on one page and not multiple for player
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
