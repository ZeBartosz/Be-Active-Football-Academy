<?php

declare(strict_types=1);

namespace Tests\Models;

use App\Models\Coach;
use App\Models\User;
use Tests\TestCase;

final class CoachTest extends TestCase
{
    public function test_to_array()
    {
        $user = User::factory()->create()->refresh();
        $coach = Coach::create([
            'user_id' => $user->id, 'avatar' => 'fasfa', 'skills' => ['skill1', 'skill2', 'skill3'],
            'about' => 'dasdas',
        ]);

        expect(array_keys($coach->toArray()))->toBe([
            'user_id',
            'avatar',
            'skills',
            'about',
            'updated_at',
            'created_at',
            'id',
        ]);
    }


    public function test_relationship_with_user()
    {

        $user = User::factory()->create()->refresh();
        $coach = Coach::create([
            'user_id' => $user->id, 'avatar' => 'fasfa', 'skills' => ['skill1', 'skill2', 'skill3'],
            'about' => 'dasdas',
        ]);


        $this->assertTrue($coach->user()->exists());
    }
}
