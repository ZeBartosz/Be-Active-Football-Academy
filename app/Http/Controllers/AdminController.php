<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Team;
use App\Models\User;

final class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();
        $coaches = Coach::join('users', 'coaches.user_id', '=', 'users.id')
            ->select('users.first_name', 'users.last_name', 'users.email', 'coaches.about', 'coaches.skills',
                'coaches.avatar', 'coaches.id')
            ->get();
        $teams = Team::all();

        return inertia('Admin/Dashboard', ['users' => $users, 'coaches' => $coaches, 'teams' => $teams]);
    }

    public function toggleAdmin(User $user)
    {
        $user->update(['is_admin' => ! $user->is_admin]);

        return redirect()->back()->with('success', "Coach {$user->first_name} {$user->last_name} updated successfully");
    }
}
