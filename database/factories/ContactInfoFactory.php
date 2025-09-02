<?php

namespace Database\Factories;

use App\Models\ContactInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ContactInfo>
 */
class ContactInfoFactory extends Factory
{
    protected $model = ContactInfo::class;

    public function definition(): array
    {
        return [
            'description' => $this->faker->sentence(10),
            'email' => $this->faker->unique()->safeEmail(),
            'number' => $this->faker->phoneNumber(),
            'address_line1' => $this->faker->city(),
            'address_line2' => $this->faker->country(),
        ];
    }
}


