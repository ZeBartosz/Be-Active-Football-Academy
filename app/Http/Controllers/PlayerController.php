<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\PlayerRequest;
use App\Models\Player;
use App\Services\PlayerService;
use App\Services\TeamService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class PlayerController
 *
 * PlayerController handles the management of players in the application.
 * It provides methods to create, edit, update, and delete players.
 */
final class PlayerController extends Controller
{
    use AuthorizesRequests;

    public function __construct(
        private readonly PlayerService $playerService,
        private readonly TeamService $teamService
    ) {}

    /**
     * Display a listing of the players.
     *
     * This action retrieves all players from the database and returns an Inertia response
     * to render the player list view.
     *
     * @return RedirectResponse An Inertia response instance containing the player list view.
     */
    public function store(PlayerRequest $request): RedirectResponse
    {
        $this->playerService->storePlayer($request->validated());

        return to_route('home')->with('message', 'Player created');
    }

    /**
     * Display the form for creating a new player.
     *
     * This action retrieves all teams from the database and returns an Inertia response
     * to render the player creation view.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the player creation view.
     */
    public function create(): Response|ResponseFactory
    {
        return inertia('Player/CreatePlayer', ['teams' => $this->teamService->getTeams()]);
    }

    /**
     * Display the form for editing an existing player.
     *
     * This action retrieves the specified player and all teams from the database,
     * and returns an Inertia response to render the player edit view.
     *
     * @param  Player  $player  The player to be edited.
     * @return Response|ResponseFactory An Inertia response instance containing the player edit view.
     */
    public function edit(Player $player): Response|ResponseFactory
    {
        return inertia('Player/EditPlayer', [
            'player' => $player,
            'teams' => $this->teamService->getTeams(),
        ]);
    }

    /**
     * Update the specified player in the database.
     *
     * This action validates the incoming request data and updates the specified player
     * with the provided information.
     *
     * @param  PlayerRequest  $request  The incoming request containing player data.
     * @param  Player  $player  The player to be updated.
     * @return RedirectResponse A redirect response indicating the result of the update operation.
     */
    public function update(PlayerRequest $request, Player $player): RedirectResponse
    {
        $this->playerService->updatePlayer($player, $request->validated());

        return to_route('user.index')->with('message', 'Player updated');
    }

    /**
     * Delete the specified player from the database.
     *
     * This action deletes the specified player and redirects back to the previous page
     * with a success message.
     *
     * @param  Player  $player  The player to be deleted.
     * @return RedirectResponse A redirect response indicating the result of the delete operation.
     */
    public function destroy(Player $player): RedirectResponse
    {
        $this->authorize('adminAndUser', [Auth::user(), $player]);

        $this->playerService->deletePlayer($player);

        return to_route('user.index')->with('message', 'Player updated');
    }

    public function getAdminPlayers(): JsonResponse
    {
        return response()->json(Player::query()
            ->with('team:id,team_name')
            ->with('user:id,first_name,last_name')
            ->paginate(10));
    }
}
