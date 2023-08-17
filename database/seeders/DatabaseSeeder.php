<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

       $admin= Admin::create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'phone' => '0622334455',
            'userable_id'=>$admin->id,
            'userable_type'=>Admin::class
        ]);
    }
}
