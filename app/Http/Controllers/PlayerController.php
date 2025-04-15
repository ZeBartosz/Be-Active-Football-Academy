<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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


    public function edit(Player $player)
    {
        //
    }


    public function update(Request $request, Player $player)
    {
        //
    }


    public function destroy(Player $player)
    {
        //
    }
}
