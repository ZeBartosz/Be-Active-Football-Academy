<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;

final class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();

        return inertia('Admin/Dashboard', ['users' => $users]);
    }

    public function updateCoach(User $user)
    {
        $user->update(['is_coach' => !$user->is_coach]);

        return redirect()->back()->with('success', "Coach {$user->first_name} {$user->last_name} updated successfully");
    }

    public function updateAdmin(User $user)
    {
        $user->update(['is_admin' => !$user->is_admin]);

        return redirect()->back()->with('success', "Coach {$user->first_name} {$user->last_name} updated successfully");
    }
}
