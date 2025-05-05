<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Event;
use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class AdminController
 *
 * Controller responsible for handling administrative functions
 */
final class AdminController extends Controller
{

    use AuthorizesRequests;

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
        $this->authorize('admin', Auth::user());

        $users = User::paginate(10);
        $coaches = Coach::with('user')->paginate(10);
        $teams = Team::withCount(['players', 'events'])->paginate(10);
        $players = Player::with('user', 'team')->paginate(10);
        $events = Event::paginate(10);

        $userCount = $users->total();
        $coachCount = $coaches->total();
        $playerCount = $players->total();
        $nextEvent = Event::where('date', '>', Carbon::now())
            ->with('team')
            ->orderBy('date')
            ->limit(5)
            ->get();


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
     * Redirects the admin to the user management page.
     *
     * This action returns an Inertia response that renders the "Admin/Users" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the user management data.
     */
    public function grantAdmin(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $user->update(['is_admin' => true]);

        return redirect()->back()->with(
            'success',
            "{$user->first_name} {$user->last_name} updated successfully"
        );
    }

    /**
     * Redirects the admin to the user management page.
     *
     * This action returns an Inertia response that renders the "Admin/Users" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the user management data.
     */
    public function revokeAdmin(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $user->update(['is_admin' => false]);

        return redirect()->back()->with(
            'success',
            "{$user->first_name} {$user->last_name} updated successfully"
        );
    }
}
