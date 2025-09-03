<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Models\Staff;
use App\Models\Team;
use App\Services\TeamService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;
use Throwable;

/**
 * Class TeamController
 *
 *
 * This controller handles team related operations.
 * It includes methods for creating a new team, storing, updating it in the database.
 */
final class TeamController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly TeamService $teamService) {}

    /**
     * Stores the team in the database.
     *
     * @throws Throwable
     */
    public function store(TeamRequest $request): RedirectResponse
    {
        $team = $this->teamService->storeTeam($request->validated());

        return to_route('admin.index')->with('success', "{$team->team_name} created successfully}");
    }

    /**
     * Redirects the admin the create team page.
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $coaches = Staff::query()
            ->whereHas('user.roles', function ($query) {
                $query->where('name', 'Coach');
            })
            ->with('user:id,first_name,last_name')
            ->get();

        return inertia('Admin/Team/CreateTeam', [
            'coaches' => $coaches,
        ]);
    }

    /**
     * Redirects the admin to the edit team page.
     */
    public function edit(Team $team): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $coaches = Staff::query()
            ->whereHas('user.roles', function ($query) {
                $query->where('name', 'Coach');
            })
            ->with('user:id,first_name,last_name')
            ->get();

        return inertia('Admin/Team/EditTeam', [
            'team' => $team,
            'teamCoaches' => $this->teamService->getCoachesForTeam($team),
            'coaches' => $coaches,
        ]);
    }

    /**
     * Updates the team in the database.
     *
     * @throws Throwable
     */
    public function update(TeamRequest $request, Team $team): RedirectResponse
    {
        $team = $this->teamService->updateTeam($team, $request->validated());

        return to_route('admin.index')->with('success', "{$team->team_name} updated successfully}");
    }

    /**
     * Deletes the team from the database.
     *
     * @throws Throwable
     */
    public function destroy(Team $team): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->teamService->deleteTeam($team);

        return to_route('admin.index')->with('success', "{$team->team_name} deleted successfully}");
    }

    public function getTeams(): JsonResponse
    {
        return response()->json(Team::query()
            ->withCount('players')
            ->withCount('events')
            ->with('staff.user.roles: name: Coach')
            ->paginate(10));
    }
}
