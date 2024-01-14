<?php


// Example Feature Test for Create
use Tests\TestCase;

class RealEstateCreateTest extends TestCase
{
    public function testCreate()
    {
        $data = [
            'name' => 'New Property',
            'real_state_type' => 'house',
            'street' => '123 Main Street',
            'external_number' => 'A12',
            'internal_number' => '101',
            'neighborhood' => 'Example Neighborhood',
            'city' => 'Example City',
            'country' => 'US',
            'rooms' => 3,
            'bathrooms' => 2.5,
            'comments' => 'Some comments about the property',
        ];

        $response = $this->post('/api/real-estates', $data);

        $response->assertStatus(201)
            ->assertJson($data);
    }
}
