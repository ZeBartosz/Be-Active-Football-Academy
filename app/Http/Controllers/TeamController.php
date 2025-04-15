<?php

declare(strict_types=1);

namespace App\Http\Controllers;

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
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $team = $request->validate([
            'team_name' => 'required | string | max:255 | unique:teams',
        ]);

        Team::create($team);

        return to_route('admin.index')->with('success', "{$team['team_name']} created successfully}");
    }

    /**
     * Redirects the admin the create team page.
     *
     * @return Response|ResponseFactory
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Admin/Team/CreateTeam');
    }
}
