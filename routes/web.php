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
})->name('home');

Route::get('/faq', [FAQController::class, 'index'])->name('faq.index');

// Routes for guests
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/login', [AuthController::class, 'authenticate'])->name('auth.authenticate');

    Route::get('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/register', [AuthController::class, 'store'])->name('auth.store');
});

// Routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::get('/player', [PlayerController::class, 'create'])->name('player.create');
    Route::post('/player', [PlayerController::class, 'store'])->name('player.store');

    Route::middleware('coach')->group(function () {
        Route::post('/coach/update/{coach}', [CoachController::class, 'update'])->name('coach.update');
        Route::get('/coach/edit/{user}', [CoachController::class, 'edit'])->name('coach.edit');
    });

    // Admin routes (only for authenticated admins)
    Route::middleware('admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
        Route::put('/admin/update/admin/{user}', [AdminController::class, 'toggleAdmin'])->name('admin.toggleAdmin');

        Route::post('/create/coach/{user}', [CoachController::class, 'store'])->name('coach.store');
        Route::delete('/coach/delete/{user}', [CoachController::class, 'destroy'])->name('coach.destroy');

        Route::get('/team', [TeamController::class, 'create'])->name('team.create');
        Route::post('/team', [TeamController::class, 'store'])->name('team.store');

        Route::get('/event', [EventController::class, 'create'])->name('event.create');
        Route::post('/event', [EventController::class, 'store'])->name('event.store');

        Route::get('/faq/create', [FAQController::class, 'create'])->name('faq.create');
        Route::post('/faq/create', [FAQController::class, 'store'])->name('faq.store');
        Route::get('/faq/update/{faq}', [FAQController::class, 'edit'])->name('faq.edit');
        Route::put('/faq/update/{faq}', [FAQController::class, 'update'])->name('faq.update');
        Route::delete('/faq/delete/{faq}', [FAQController::class, 'destroy'])->name('faq.destroy');
    });
});
