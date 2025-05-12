<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Coach;
use App\Models\Event;
use App\Models\Player;
use App\Models\Staff;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;

final class AdminService
{

    /**
     * Retrieves data for the admin dashboard.
     *
     * This method fetches paginated data for users, coaches, staff, teams, players,
     * and events. It also counts the total number of users, coaches, and players,
     * and retrieves the next upcoming event.
     *
     * @param  int  $perPage  The number of items to display per page.
     * @return array An array containing the paginated data and counts.
     */
    public function getAdminDashboardData(int $perPage): array
    {
        $users = User::paginate($perPage);
        $coaches = Coach::with('user')->paginate($perPage);
        $staff = Staff::with('user')->paginate($perPage);
        $teams = Team::with('coaches.user')
            ->withCount(['players', 'events'])
            ->paginate($perPage);
        $players = Player::with(['user', 'team'])->paginate($perPage);
        $events = Event::paginate($perPage);

        $nextEvent = Event::where('date', '>', Carbon::now())
            ->with('team')
            ->orderBy('date')
            ->limit(5)
            ->get();

        return [
            'users' => $users,
            'coaches' => $coaches,
            'staff' => $staff,
            'teams' => $teams,
            'players' => $players,
            'events' => $events,
            'userCount' => $users->total(),
            'coachCount' => $coaches->total(),
            'playerCount' => $players->total(),
            'nextEvent' => $nextEvent,
        ];
    }

    public function setAdminStatus(User $user, bool $isAdmin): User
    {
        $user->update(['is_admin' => $isAdmin]);

        return $user;
    }
}
