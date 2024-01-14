<?php

// Example Feature Test for Index
use Tests\TestCase;
use App\Models\RealEstate;

class RealEstateIndexTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->get('/api/real-estates');

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => ['id', 'name', 'real_state_type', 'city', 'country'],
            ]);
    }
}
