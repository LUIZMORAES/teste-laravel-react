<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'lcamconsultoria@gmail.com'],
            ['name' => 'Luiz', 'email' => 'lcamconsultoria@gmail.com', 'password' => '123456A#']
        );
    }
}
