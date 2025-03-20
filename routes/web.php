<?php

declare(strict_types=1);

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

// Routes for guests
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'authenticate']);

    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'store']);
});

// Routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Admin routes (only for authenticated admins)
    Route::middleware('admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::put('/admin/update/admin/{user}', [AdminController::class, 'updateAdmin']);
        Route::put('/admin/update/coach/{user}', [AdminController::class, 'updateCoach']);
    });
});

