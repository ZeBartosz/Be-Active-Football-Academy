<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Event;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;

final class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();
        $coaches = Coach::with('user')->get();
        $teams = Team::all();
        $players = Player::with('user', 'team')->get();
        $events = Event::all();

        return inertia('Admin/Dashboard',
            ['users' => $users, 'coaches' => $coaches, 'teams' => $teams, 'players' => $players, 'events' => $events]);
    }

    public function toggleAdmin(User $user)
    {
        $user->update(['is_admin' => !$user->is_admin]);

        return redirect()->back()->with('success', "Coach {$user->first_name} {$user->last_name} updated successfully");
    }
}
