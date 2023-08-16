<?php

namespace App\Api;

use App\Enums\eRespCode;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends ResponseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->resp->ok(eRespCode::P_LISTED_200_00,  [
            [
                'uuid' => "2aa3f3e5-fcd3-41ab-9942-4da2ac9af1c0",
                'name' => 'Prod 1',
                'sku' => str()->random(6),
            ],
            [
                'uuid' => "006e36a4-c24d-44e0-a8f9-b2eff2b96c48",
                'name' => 'Prod 2',
                'sku' => str()->random(6),
            ],
            [
                'uuid' => "31b4928c-3856-4210-a425-95f9a460975b",
                'name' => 'Prod 3',
                'sku' => str()->random(6),
            ]
        ]);
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function getProductByUuid(string $uuid)
    {
        $collection = collect([
            [
                'uuid' => "2aa3f3e5-fcd3-41ab-9942-4da2ac9af1c0",
                'name' => 'Prod 1',
                'sku' => str()->random(6),
            ],
            [
                'uuid' => "006e36a4-c24d-44e0-a8f9-b2eff2b96c48",
                'name' => 'Prod 2',
                'sku' => str()->random(6),
            ],
            [
                'uuid' => "31b4928c-3856-4210-a425-95f9a460975b",
                'name' => 'Prod 3',
                'sku' => str()->random(6),
            ]
        ]);
        return response()->json([
            'payload' => [...$collection->where('uuid', $uuid)->first()]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
