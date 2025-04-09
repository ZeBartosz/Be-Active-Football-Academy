<?php

declare(strict_types=1);

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/FAQ', [FAQController::class, 'index']);

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
    Route::get('/player', [PlayerController::class, 'create'])->name('player');
    Route::post('/player', [PlayerController::class, 'store']);

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

        Route::get('/admin/team', [TeamController::class, 'create'])->name('team');
        Route::post('/admin/team', [TeamController::class, 'store']);

        Route::get('/admin/event', [EventController::class, 'create'])->name('event');
        Route::post('/admin/event', [EventController::class, 'store']);

        Route::get('/FAQ/create', [FAQController::class, 'create'])->name('FAQ');
        Route::post('/FAQ/create', [FAQController::class, 'store']);
        Route::get('/FAQ/update/{faq}', [FAQController::class, 'edit'])->name('FAQ');
        Route::put('/FAQ/update/{faq}', [FAQController::class, 'update']);
        Route::delete('/FAQ/delete/{faq}', [FAQController::class, 'destroy']);
    });
});
