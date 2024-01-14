<?php

// Example Feature Test for Update
use Tests\TestCase;
use App\Models\RealEstate;

class RealEstateUpdateTest extends TestCase
{
    public function testUpdate()
    {
        $realEstate = RealEstate::first();
        $updatedData = [
            'name' => 'Updated Property',
            'real_state_type' => 'department', // Update the type if needed
            'street' => '456 New Avenue',
            'external_number' => 'B34',
            'internal_number' => '201',
            'neighborhood' => 'New Neighborhood',
            'city' => 'New City',
            'country' => 'CA',
            'rooms' => 4,
            'bathrooms' => 3.5,
            'comments' => 'Updated comments about the property',
        ];

        $response = $this->put('/api/real-estates/' . $realEstate->id, $updatedData);

        $response->assertStatus(200)
            ->assertJson($updatedData);
    }
}
