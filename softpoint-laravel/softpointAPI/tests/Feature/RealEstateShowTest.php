<?php

// Example Feature Test for Show
use Tests\TestCase;
use App\Models\RealEstate;

class RealEstateShowTest extends TestCase
{
    public function testShow()
    {
        $realEstate = RealEstate::factory()->create();

        $response = $this->get('/api/real-estates/' . $realEstate->id);

        $response->assertStatus(200)
            ->assertJson($realEstate->toArray());
    }
}
