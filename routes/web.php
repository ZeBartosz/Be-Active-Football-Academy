<?php

declare(strict_types=1);

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ProgramGroupController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use App\Models\Coach;
use App\Models\Staff;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $staff = array_map(function ($modelClass) {
        return $modelClass::with('user')->get();
    }, [
        'staff' => Staff::class,
        'coaches' => Coach::class,
    ]);

    return inertia('Home', [
        'programGroups' => App\Models\ProgramGroup::all(),
        'staff' => $staff,
    ]);
})->name('home');

Route::get('/faq', [FAQController::class, 'index'])->name('faq.index');
Route::get('/program-group/{programGroup}',
    [ProgramGroupController::class, 'show'])->name('program_group.show');
Route::get('/program-group', [ProgramGroupController::class, 'index'])->name('program_group.index');

// Routes for guests
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/login', [AuthController::class, 'authenticate'])->name('auth.authenticate');

    Route::get('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/register', [AuthController::class, 'store'])->name('auth.store');
});

// Routes for authenticated users
Route::middleware('auth')->group(function () {

    Route::get('/user', [UserController::class, 'index'])->name('user.index');

    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');

    Route::get('/player', [PlayerController::class, 'create'])->name('player.create');
    Route::post('/player', [PlayerController::class, 'store'])->name('player.store');
    Route::get('/player/edit/{player}', [PlayerController::class, 'edit'])->name('player.edit');
    Route::put('/player/update/{player}', [PlayerController::class, 'update'])->name('player.update');
    Route::delete('/player/delete/{player}', [PlayerController::class, 'destroy'])->name('player.destroy');

    Route::post('/coach/update/{coach}', [CoachController::class, 'update'])->name('coach.update');
    Route::get('/coach/edit/{user}', [CoachController::class, 'edit'])->name('coach.edit');

    // Admin routes (only for authenticated admins)
    Route::middleware('admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
        Route::put('/admin/update/{user}', [AdminController::class, 'grantAdmin'])->name('admin.grant');
        Route::put('/admin/delete/{user}', [AdminController::class, 'revokeAdmin'])->name('admin.revoke');

        // Coach routes
        Route::post('/create/coach/{user}', [CoachController::class, 'store'])->name('coach.store');
        Route::delete('/coach/delete/{user}', [CoachController::class, 'destroy'])->name('coach.destroy');

        // Team routes
        Route::get('/team', [TeamController::class, 'create'])->name('team.create');
        Route::post('/team', [TeamController::class, 'store'])->name('team.store');
        Route::get('/team/update/{team}', [TeamController::class, 'edit'])->name('team.edit');
        Route::put('/team/update/{team}', [TeamController::class, 'update'])->name('team.update');
        Route::delete('/team/delete/{team}', [TeamController::class, 'destroy'])->name('team.destroy');

        // Event routes
        Route::get('/event', [EventController::class, 'create'])->name('event.create');
        Route::post('/event', [EventController::class, 'store'])->name('event.store');
        Route::get('/event/update/{event}', [EventController::class, 'edit'])->name('event.edit');
        Route::put('/event/update/{event}', [EventController::class, 'update'])->name('event.update');
        Route::delete('/event/delete/{event}', [EventController::class, 'destroy'])->name('event.destroy');

        // FAQ routes
        Route::get('/faq/create', [FAQController::class, 'create'])->name('faq.create');
        Route::post('/faq/create', [FAQController::class, 'store'])->name('faq.store');
        Route::get('/faq/update/{faq}', [FAQController::class, 'edit'])->name('faq.edit');
        Route::put('/faq/update/{faq}', [FAQController::class, 'update'])->name('faq.update');
        Route::delete('/faq/delete/{faq}', [FAQController::class, 'destroy'])->name('faq.destroy');

        // Program Group routes
        Route::get('/program-group/create', [ProgramGroupController::class, 'create'])->name('program_group.create');
        Route::post('/program-group/create', [ProgramGroupController::class, 'store'])->name('program_group.store');
        Route::get('/program-group/update/{programGroup}',
            [ProgramGroupController::class, 'edit'])->name('program_group.edit');
        Route::put('/program-group/update/{programGroup}',
            [ProgramGroupController::class, 'update'])->name('program_group.update');
        Route::delete('/program-group/delete/{programGroup}',
            [ProgramGroupController::class, 'destroy'])->name('program_group.destroy');

        // Program routes
        Route::get('/program/create/{programGroup}', [ProgramController::class, 'create'])->name('program.create');
        Route::post('/program/create/{programGroup}', [ProgramController::class, 'store'])->name('program.store');
        Route::get('/program/update/{program}', [ProgramController::class, 'edit'])->name('program.edit');
        Route::put('/program/update/{program}', [ProgramController::class, 'update'])->name('program.update');
        Route::delete('/program/delete/{program}', [ProgramController::class, 'destroy'])->name('program.destroy');

        // Staff routes
        Route::get('/staff/create/{user}',
            [\App\Http\Controllers\StaffController::class, 'create'])->name('staff.create');
        Route::post('/staff/create/{user}',
            [\App\Http\Controllers\StaffController::class, 'store'])->name('staff.store');
        Route::get('/staff/update/{staff}', [\App\Http\Controllers\StaffController::class, 'edit'])->name('staff.edit');
        Route::put('/staff/update/{staff}',
            [\App\Http\Controllers\StaffController::class, 'update'])->name('staff.update');
        Route::delete('/staff/delete/{user}',
            [\App\Http\Controllers\StaffController::class, 'destroy'])->name('staff.destroy');

    });
});
