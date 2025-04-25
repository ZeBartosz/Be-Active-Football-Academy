<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Event;
use App\Models\FAQ;
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
        FAQ::factory(10)->create();

        User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Mart',
            'email' => 'a@a.com',
            'password' => bcrypt('123456'),
            'is_admin' => true,
        ]);

        User::factory()->create([
            'first_name' => 'Test 2',
            'last_name' => 'Test 2',
            'email' => 'b@b.com',
            'password' => bcrypt('123456'),
        ]);
    }
}
