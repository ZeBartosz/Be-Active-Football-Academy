<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class PlayerController
 *
 * PlayerController handles the management of players in the application.
 * It provides methods to create, edit, update, and delete players.
 *
 */
final class PlayerController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the players.
     *
     * This action retrieves all players from the database and returns an Inertia response
     * to render the player list view.
     *
     * @param  Request  $request
     * @return RedirectResponse An Inertia response instance containing the player list view.
     */
    public function store(Request $request): RedirectResponse
    {
        $player = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'team_id' => 'required|integer|exists:teams,id',
            'user_id' => 'required|integer|exists:users,id',
            'date_of_birth' => 'required|date|before:today',
            'address' => 'required|string|max:500',
            'post_code' => 'required|string|max:255',
        ]);

        Player::create($player);

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
        $teams = Team::all();

        return inertia('Player/CreatePlayer', ['teams' => $teams]);
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

        $teams = Team::all();

        return inertia('Player/EditPlayer', [
            'player' => $player,
            'teams' => $teams,
        ]);
    }

    /**
     * Update the specified player in the database.
     *
     * This action validates the incoming request data and updates the specified player
     * with the provided information.
     *
     * @param  Request  $request  The incoming request containing player data.
     * @param  Player  $player  The player to be updated.
     * @return RedirectResponse A redirect response indicating the result of the update operation.
     */
    public function update(Request $request, Player $player): RedirectResponse
    {
        $this->authorize('adminAndUser', [Auth::user(), $player]);

        $playerData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'team_id' => 'required|integer|exists:teams,id',
            'user_id' => 'required|integer|exists:users,id',
            'date_of_birth' => 'required|date|before:today',
            'address' => 'required|string|max:500',
            'post_code' => 'required|string|max:255',
        ]);

        $player->update($playerData);

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

        $player->delete();

        return to_route('user.index')->with('message', 'Player updated');
    }

}
