<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Event;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class AdminController
 *
 * Controller responsible for handling administrative functions
 */
final class AdminController extends Controller
{
    /**
     * Redirects the admin to the admin dashboard.
     *
     * This action returns an Inertia response that renders the "Admin/AdminDashboard" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     * - `coaches`: a collection of Coach models with their related User.
     * - `teams`: a collection of all Team models.
     * - `players`: a collection of Player models with their related User and Team.
     * - `events`: a collection of all Event models.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the dashboard data.
     */
    public function index(): Response|ResponseFactory
    {
        $userCount = User::count();
        $coachCount = Coach::count();
        $playerCount = Player::count();
        $nextEvent = Event::where('date', '>', Carbon::now())
            ->with('team')
            ->orderBy('date')
            ->limit(5)
            ->get();

        $users = User::paginate(10);
        $coaches = Coach::with('user')->paginate(10);
        $teams = Team::withCount(['players', 'events'])->paginate(10);
        $players = Player::with('user', 'team')->paginate(10);
        $events = Event::paginate(10);

        return inertia('Admin/AdminDashboard', [
            'users' => $users,
            'coaches' => $coaches,
            'teams' => $teams,
            'players' => $players,
            'events' => $events,
            'userCount' => $userCount,
            'coachCount' => $coachCount,
            'playerCount' => $playerCount,
            'nextEvent' => $nextEvent,
        ]);
    }

    /**
     * Toggles the user's admin status.
     *
     * This method inverts the current admin status of the given user and then
     * redirects back to the previous page with a success message.
     *
     * @param  User  $user  The user whose admin status is to be toggled.
     * @return RedirectResponse A redirect response indicating the update was successful.
     */
    public function toggleAdmin(User $user): RedirectResponse
    {
        $user->update(['is_admin' => !$user->is_admin]);

        return redirect()->back()->with(
            'success',
            "Coach {$user->first_name} {$user->last_name} updated successfully"
        );
    }
}
