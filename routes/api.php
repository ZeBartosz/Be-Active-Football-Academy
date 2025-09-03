<?php

declare(strict_types=1);

use App\Http\Controllers\ContactInfoController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProgramGroupController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Home
Route::get('/home/program/groups', [ProgramGroupController::class, 'getProgramGroups'])->name('api.home.program.groups');
Route::get('/home/staff', [StaffController::class, 'getStaff'])->name('api.home.staff');
Route::get('/home/contact', [ContactInfoController::class, 'getContactInfo'])->name('api.home.contact');

// Admin
Route::get('/admin/events', [EventController::class, 'getAdminEvents'])->name('api.admin.events');
Route::get('/admin/next/events', [EventController::class, 'getNextFiveEvents'])->name('api.admin.next.events');
Route::get('/admin/players', [PlayerController::class, 'getAdminPlayers'])->name('api.admin.players');
Route::get('/admin/staff', [StaffController::class, 'getStaffPaginated'])->name('api.admin.staff');
Route::get('/admin/teams', [TeamController::class, 'getTeams'])->name('api.admin.teams');
Route::get('/admin/users', [UserController::class, 'getUsers'])->name('api.admin.users');
