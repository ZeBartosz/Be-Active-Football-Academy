<?php

namespace Database\Factories;

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
            'user_id' => \App\Models\User::factory()->create(['is_staff' => true]),
            'role' => fake()->randomElement(['stuff', 'Upper']),
            'avatar' => fake()->imageUrl(),
            'about' => fake()->paragraph(),
            'skills' => json_encode(fake()->words(3, true)),
        ];
    }
}
