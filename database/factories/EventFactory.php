<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(3, true),
            'description' => fake()->text(),
            'type' => fake()->randomElement(['Training', 'Match', 'Event']),
            'date' => fake()->dateTimeBetween('-1 week', '+1 week'),
            'time' => fake()->time(),
            'address' => fake()->address(),
            'post_code' => fake()->postcode(),
        ];
    }
}
