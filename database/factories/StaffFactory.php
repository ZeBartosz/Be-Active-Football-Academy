<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Staff>
 */
class StaffFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'role' => fake()->randomElement(['stuff', 'Upper']),
            'avatar' => 'https://picsum.photos/seed/'
                . fake()->unique()->uuid()
                . '/300/300',
            'about' => fake()->paragraph(),
            'skills' => fake()->words(3),
        ];
    }
}
