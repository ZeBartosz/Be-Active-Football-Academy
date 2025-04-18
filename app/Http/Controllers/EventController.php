<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Team;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class EventController
 *
 * This Controller handles the creation, deletion and modification of the events
 * which the admin can handle, then are displayed for the user
 */
final class EventController extends Controller
{
    use AuthorizesRequests;

    /**
     * Stores the event
     * checks if the user is an admin, validates the incoming request
     * on successful validates store the data
     *
     * @param  Request
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function store(Request $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:500',
            'type' => 'required|max:255',
            'date' => 'required|date|after:today',
            'time' => 'required|date_format:H:i',
            'team_id' => 'nullable|e\Illuminate\Http\xists:teams,id',
            'address' => 'required|max:255',
            'post_code' => 'required|max:7|min:6',
        ]);

        Event::create($validatedData);

        return to_route('admin.index')->with('success', "Event {$validatedData['title']} created!");
    }

    /**
     * redirects an admin to the creation page of the event
     *
     * @return Response|ResponseFactory
     * @throws AuthorizationException
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $teams = Team::all();

        return inertia('Event/CreateEvent', ['teams' => $teams]);
    }
}
