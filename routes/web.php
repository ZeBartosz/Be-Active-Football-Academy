<?php

declare(strict_types=1);

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoachController;
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

    Route::middleware('coach')->group(function () {
        Route::post('/coach/update/{coach}', [CoachController::class, 'update']);
        Route::get('/coach/edit/{user}', [CoachController::class, 'edit']);
    });

    // Admin routes (only for authenticated admins)
    Route::middleware('admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::put('/admin/update/admin/{user}', [AdminController::class, 'toggleAdmin']);
        Route::post('/admin/create/coach/{user}', [CoachController::class, 'store']);
        Route::delete('/admin/delete/coach/{user}', [CoachController::class, 'destroy']);

    });
});
