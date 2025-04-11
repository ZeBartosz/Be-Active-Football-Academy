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
            'title' => fake()->text(),
            'description' => fake()->text(),
            'type' => fake()->text(),
            'date' => fake()->date(),
            'time' => fake()->time(),
            'address' => fake()->address(),
            'post_code' => fake()->postCode(),
        ];
    }
}
