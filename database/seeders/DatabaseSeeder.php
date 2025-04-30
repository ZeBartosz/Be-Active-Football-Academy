<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Event;
use App\Models\FAQ;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(100)->create();
        Event::factory(100)->create();
        FAQ::factory(5)->create();
        Team::factory(5)->create();
        Event::factory(100)->create(['team_id' => 1]);

        $user = User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Mart',
            'email' => 'a@a.com',
            'password' => bcrypt('123456'),
            'is_admin' => true,
        ]);

        Player::factory(5)->create([
            'user_id' => $user->id,
            'team_id' => 1,
        ]);

        User::factory()->create([
            'first_name' => 'Test 2',
            'last_name' => 'Test 2',
            'email' => 'b@b.com',
            'password' => bcrypt('123456'),
        ]);
    }
}
