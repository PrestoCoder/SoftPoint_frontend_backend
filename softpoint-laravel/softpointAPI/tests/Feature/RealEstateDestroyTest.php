<?php

// Example Feature Test for Destroy
use Tests\TestCase;
use App\Models\RealEstate;

class RealEstateDestroyTest extends TestCase
{
    public function testDestroy()
    {
        $realEstate = RealEstate::first();

        $response = $this->delete('/api/real-estates/' . $realEstate->id);

        $response->assertStatus(200)
            ->assertJson($realEstate->toArray());
    }
}
