<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Staff>
 */
final class StaffFactory extends Factory
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
            'avatar' => 'https://picsum.photos/seed/'
                .fake()->unique()->uuid()
                .'/300/300',
            'about' => fake()->paragraph(),
            'skills' => fake()->words(3),
        ];
    }
}
