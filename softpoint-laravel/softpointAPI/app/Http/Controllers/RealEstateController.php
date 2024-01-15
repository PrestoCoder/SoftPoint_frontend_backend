<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use App\Models\RealEstate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RealEstateController extends Controller
{
    public function index()
    {
        // List: display only id, name, type, city, and country
        $realEstates = RealEstate::select('id', 'name', 'real_state_type', 'city', 'country')->get();
        return response()->json($realEstates);
    }

    public function show($id)
    {
        // Show: display all attributes
        $realEstate = RealEstate::findOrFail($id);
        return response()->json($realEstate);
    }

    public function store(Request $request)
    {   
        $validCountryCodes = include('/Users/rohanchhibba/Desktop/SoftPoint/softpoint-laravel/softpointAPI/countryCodes/countryCodes.php');
        // Add: receiving data as JSON
        $data = $request->validate([
            'name' => 'required|string|max:128',
            'real_state_type' => 'required|in:house,department,land,commercial_ground',
            'street' => 'required|string|max:128',
            'external_number' => 'required|alpha_dash|max:12',
            'internal_number' => 'nullable|required_if:real_state_type,department,commercial_ground|regex:/^[a-zA-Z0-9 -]+$/',
            'neighborhood' => 'required|string|max:128',
            'city' => 'required|string|max:64',
            'country' => ['required', Rule::in($validCountryCodes['validCountryCodes'])],
            'rooms' => 'required|integer',
            'bathrooms' => [
                'required',
                'numeric',
                'min:0',
                Rule::requiredIf(function () use ($request) {
                    return in_array($request->input('real_state_type'), ['land', 'commercial_ground']);
                }),
            ],
            'comments' => 'nullable|string|max:128',
        ]);

        $realEstate = RealEstate::create($data);
        return response()->json($realEstate, 201);
    }

    public function update(Request $request, $id)
    {
        $validCountryCodes = include('/Users/rohanchhibba/Desktop/SoftPoint/softpoint-laravel/softpointAPI/countryCodes/countryCodes.php');
        // Update: display the newly updated record
        $data = $request->validate([
            'name' => 'required|string|max:128',
            'real_state_type' => 'required|in:house,department,land,commercial_ground',
            'street' => 'required|string|max:128',
            'external_number' => 'required|alpha_dash|max:12',
            'internal_number' => 'nullable|required_if:real_state_type,department,commercial_ground|regex:/^[a-zA-Z0-9 -]+$/',
            'neighborhood' => 'required|string|max:128',
            'city' => 'required|string|max:64',
            'country' => ['required', Rule::in($validCountryCodes['validCountryCodes'])],
            'rooms' => 'required|integer',
            'bathrooms' => [
                'required',
                'numeric',
                'min:0',
                Rule::requiredIf(function () use ($request) {
                    return in_array($request->input('real_state_type'), ['land', 'commercial_ground']);
                }),
            ],
            'comments' => 'nullable|string|max:128',
        ]);
    
        $realEstate = RealEstate::findOrFail($id);
        $realEstate->update($data);
    
        return response()->json($realEstate);
    }
    

    public function destroy($id)
    {
        // Remove: display recently removed record and use soft-delete
        $realEstate = RealEstate::findOrFail($id);
        $realEstate->delete();

        return response()->json($realEstate);
    }
}
