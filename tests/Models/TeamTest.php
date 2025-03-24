<?php

declare(strict_types=1);

namespace Tests\Unit\Models;

use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Tests\TestCase;

final class TeamTest extends TestCase
{
    public function test_to_array()
    {
        $team = Team::factory()->create()->refresh();

        expect(array_keys($team->toArray()))->toBe([
            'id',
            'team_name',
            'created_at',
            'updated_at',
        ]);
    }

    public function test_relationship_with_players()
    {

        $user = User::factory()->create();
        $team = Team::create(['team_name' => 'test']);

        $player = $players = Player::create([
            'first_name' => 'test',
            'last_name' => 'test',
            'team_id' => $team->id,
            'user_id' => $user->id,
        ]);

        $this->assertTrue($team->players()->exists());
    }

}
