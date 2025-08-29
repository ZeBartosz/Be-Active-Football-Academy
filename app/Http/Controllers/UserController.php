<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response|ResponseFactory
    {
        $user = Auth::user();
        $players = $user->players()->with('team')->get();
        $nextEvents = $players->flatMap(function ($player) {
            return $player->team->events()
                ->where('date', '>', Carbon::now())
                ->with('team')
                ->orderBy('date')
                ->limit(5)
                ->get();
        })->sortBy('date')->take(5);

        return inertia('User/UserDashboard', [
            'user' => $user,
            'players' => $players,
            'nextEvents' => $nextEvents,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    public function getUsers(): JsonResponse
    {
        return response()->json(User::query()
            ->with('roles')
            ->paginate(10));
    }
}
