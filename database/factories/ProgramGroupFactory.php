<?php

declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProgramGroup>
 */
final class ProgramGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->unique()->word(),
            'description' => fake()->sentence(),
            'image' => fake()->imageUrl(500, 500, 'people'),
            'age_range' => fake()->randomElement(['adult', 'youth', 'junior']),
        ];
    }
}
