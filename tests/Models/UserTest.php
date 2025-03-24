<?php

declare(strict_types=1);

namespace Tests\Unit\Models;

use App\Models\Coach;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Tests\TestCase;

final class UserTest extends TestCase
{
    public function test_to_array()
    {
        $user = User::factory()->create()->refresh();

        expect(array_keys($user->toArray()))->toBe([
            'id',
            'first_name',
            'last_name',
            'email',
            'is_admin',
            'is_coach',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_can_fetch_the_coach_for_a_user()
    {
        $user = User::factory()->create();

        $coach = Coach::create([
            'user_id' => $user->id,
        ]);

        $this->assertInstanceOf(Coach::class, $user->coach);
        $this->assertEquals($coach->id, $user->coach->id);
    }

    public function test_can_fetch_players_for_a_user()
    {
        $user = User::factory()->create();
        $team = Team::create(['team_name' => 'Test TeamTest']);

        $players = Player::create([
            'first_name' => 'test',
            'last_name' => 'test',
            'team_id' => $team->id,
            'user_id' => $user->id,
        ]);

        $players = Player::create([
            'first_name' => 'test 2',
            'last_name' => 'test 2',
            'team_id' => $team->id,
            'user_id' => $user->id,
        ]);

        $players = Player::create([
            'first_name' => 'test 2',
            'last_name' => 'test 2',
            'team_id' => $team->id,
            'user_id' => $user->id,
        ]);

        $this->assertCount(3, $user->players);
        $this->assertInstanceOf(Player::class, $user->players->first());
    }
}
