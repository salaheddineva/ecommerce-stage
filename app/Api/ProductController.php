<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'payload' =>
            [
                [
                    'uuid' => str()->uuid(),
                    'name' => 'Prod 1',
                    'sku' => str()->random(6),
                ],
                [
                    'uuid' => str()->uuid(),
                    'name' => 'Prod 2',
                    'sku' => str()->random(6),
                ],
                [
                    'uuid' => str()->uuid(),
                    'name' => 'Prod 3',
                    'sku' => str()->random(6),
                ]
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
