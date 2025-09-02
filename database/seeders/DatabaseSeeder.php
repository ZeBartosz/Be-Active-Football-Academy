<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\ContactInfo;
use App\Models\Event;
use App\Models\FAQ;
use App\Models\Player;
use App\Models\ProgramGroup;
use App\Models\Staff;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'Coach']);
        Role::create(['name' => 'Staff']);

        User::factory(100)->create();
        Event::factory(100)->create();
        FAQ::factory(5)->create();
        Team::factory(5)->create();
        $staff = Staff::factory(4)->create();
        $staff->each(function ($staff) {
            $staff->user->assignRole('Coach');
        });
        Event::factory(100)->create(['team_id' => 1]);

        $groups = ProgramGroup::factory(3)->create();
        $groups->each(function ($group) {
            \App\Models\Program::factory(3)
                ->create(['program_group_id' => $group->id]);
        });

        $user = User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Mart',
            'email' => 'a@a.com',
            'password' => bcrypt('123456'),
        ]);

        $user->assignRole('admin');

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

        ContactInfo::factory()->create([
                'description' => 'We love to hear from you. Reach out for any questions.',
                'email' => 'contact@beactivefa.co.uk',
                'number' => '+44 7700 900123',
                'address_line1' => 'Peterborough',
                'address_line2' => 'United Kingdom',
            ]);
    }
}
