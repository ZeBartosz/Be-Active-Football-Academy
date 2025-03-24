<?php

namespace Tests\Models;

use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Tests\TestCase;

class PlayerTest extends TestCase
{
    public function test_to_array()
    {
        $user = User::factory()->create()->refresh();
        $team = Team::factory()->create();
        $player = Player::create([
            'user_id' => $user->id,
            'team_id' => $team->id,
            'first_name' => 'John',
            'last_name' => 'Doe',
        ]);


        expect(array_keys($player->toArray()))->toBe([
            'user_id',
            'team_id',
            'first_name',
            'last_name',
            'updated_at',
            'created_at',
            'id',
        ]);
    }

    public function test_relationship_with_user()
    {

        $user = User::factory()->create()->refresh();
        $team = Team::factory()->create();
        $player = Player::create([
            'user_id' => $user->id,
            'team_id' => $team->id,
            'first_name' => 'John',
            'last_name' => 'Doe',
        ]);


        $this->assertTrue($player->user()->exists());
    }

    public function test_relationship_with_team()
    {

        $user = User::factory()->create()->refresh();
        $team = Team::factory()->create();
        $player = Player::create([
            'user_id' => $user->id,
            'team_id' => $team->id,
            'first_name' => 'John',
            'last_name' => 'Doe',
        ]);


        $this->assertTrue($player->team()->exists());
    }
}
