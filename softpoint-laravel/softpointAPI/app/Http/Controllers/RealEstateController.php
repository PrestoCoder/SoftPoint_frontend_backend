<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RealEstateController extends Controller
{
    public function index()
    {
        // List all real estates with selected attributes
        $realEstates = RealEstate::select('id', 'name', 'real_state_type', 'city', 'country')->get();
        return response()->json($realEstates);
    }

    public function show($id)
    {
        // Show details of a specific real estate
        $realEstate = RealEstate::findOrFail($id);
        return response()->json($realEstate);
    }

    public function store(Request $request)
    {
        // Add a new real estate
        $data = $request->validate([
            // Validation rules for request data
            // Add rules based on the RealEstate attributes
        ]);

        $realEstate = RealEstate::create($data);
        return response()->json($realEstate, 201);
    }

    public function update(Request $request, $id)
    {
        // Update a specific real estate
        $data = $request->validate([
            // Validation rules for request data
            // Add rules based on the RealEstate attributes
        ]);

        $realEstate = RealEstate::findOrFail($id);
        $realEstate->update($data);

        return response()->json($realEstate);
    }

    public function destroy($id)
    {
        // Remove a specific real estate (soft delete)
        $realEstate = RealEstate::findOrFail($id);
        $realEstate->delete();

        return response()->json($realEstate);
    }

}
