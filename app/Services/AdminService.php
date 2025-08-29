<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Event;
use App\Models\Player;
use App\Models\Staff;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;
use Spatie\Permission\Models\Role;

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
    public function getAdminDashboardData(): array
    {

        return [
            'userCount' => User::count(),
            'coachCount' => Role::where('name', 'Coach')->count(),
            'playerCount' => Player::count(),        
        ];
    }

    public function setAdminStatus(User $user, bool $isAdmin): User
    {
        $user->update(['is_admin' => $isAdmin]);

        return $user;
    }
}
