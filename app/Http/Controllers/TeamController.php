<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

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

    /**
     * Stores the team in the database.
     */
    public function store(Request $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'team_name' => 'required|string|max:255|unique:teams,team_name',
            'coach_id' => 'required|array',
            'coach_id.*' => 'exists:coaches,id',
        ]);

        $team = Team::create([
            'team_name' => $validated['team_name'],
        ]);

        $team->coaches()->sync($validated['coach_id']);

        return to_route('admin.index')->with('success', "{$team['team_name']} created successfully}");
    }

    /**
     * Redirects the admin the create team page.
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $coaches = Coach::with('user')->get();

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
        $teamCoaches = $team->coaches()->pluck('coach_id')->toArray();

        $coaches = Coach::with('user')->get();

        return inertia('Admin/Team/EditTeam', [
            'team' => $team,
            'teamCoaches' => $teamCoaches,
            'coaches' => $coaches,
        ]);
    }

    /**
     * Updates the team in the database.
     */
    public function update(Request $request, Team $team): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'team_name' => 'required|string|max:255|unique:teams,team_name',
            'coach_id' => 'required|array',
            'coach_id.*' => 'exists:coaches,id',
        ]);

        $team->update($validated['team_name']);

        $team->coaches()->sync($validated['coach_id']);

        return to_route('admin.index')->with('success', "{$team['team_name']} updated successfully}");
    }

    /**
     * Deletes the team from the database.
     */
    public function destroy(Team $team): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $team->delete();

        return to_route('admin.index')->with('success', "{$team['team_name']} deleted successfully}");
    }
}
