<?php

namespace Database\Factories;

use App\Models\RealEstate;
use Illuminate\Database\Eloquent\Factories\Factory;

class RealEstateFactory extends Factory
{
    protected $model = RealEstate::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'real_state_type' => $this->faker->randomElement(['house', 'department', 'land', 'commercial_ground']),
            'street' => $this->faker->streetAddress,
            'external_number' => $this->faker->buildingNumber,
            'internal_number' => $this->faker->optional()->buildingNumber,
            'neighborhood' => $this->faker->word,
            'city' => $this->faker->city,
            'country' => $this->faker->countryCode,
            'rooms' => $this->faker->numberBetween(1, 10),
            'bathrooms' => $this->faker->randomFloat(1, 0, 5),
            'comments' => $this->faker->optional()->sentence,
        ];
    }
}
