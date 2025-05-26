<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\Api\ApiProdutoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    /*===========================startProfile=======================================*/
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    /*===========================startUsers=======================================*/
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/show-user/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/create-user', [UserController::class, 'create'])->name('users.create');
    route::post('/store-user', [UserController::class, 'store'])->name('users.store');
    Route::get('/edit-user/{user}', [UserController::class, 'edit'])->name('users.edit');
    route::put('/update-user/{user}', [UserController::class, 'update'])->name('users.update');
    route::delete('/destroy-user/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    /*===========================startProdutos=======================================*/
    Route::get('/produtos', [ProdutosController::class, 'index'])->name('produtos.index');
    Route::get('/show-produto/{produto}', [ProdutosController::class, 'show'])->name('produtos.show');
    Route::get('/create-produto', [ProdutosController::class, 'create'])->name('produtos.create');
    route::post('/store-produto', [ProdutosController::class, 'store'])->name('produtos.store');
    Route::get('/edit-produto/{produto}', [ProdutosController::class, 'edit'])->name('produtos.edit');
    route::put('/update-produto/{produto}', [ProdutosController::class, 'update'])->name('produtos.update');
    route::delete('/destroy-produto/{produto}', [ProdutosController::class, 'destroy'])->name('produtos.destroy');
    
});
/*===========================startApiProdutos=======================================*/
Route::get('/api/produtos', [ApiProdutoController::class, 'list_produto'])->name('produtos.apiindex');

require __DIR__.'/auth.php';
