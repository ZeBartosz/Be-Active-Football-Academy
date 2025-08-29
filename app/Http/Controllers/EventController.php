<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Models\Team;
use App\Services\EventService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
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

    public function __construct(private readonly EventService $eventService)
    {
    }

    /**
     * Display a listing of the events.
     *
     * This action retrieves all events from the database and returns an Inertia response
     * to render the event list view.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the event list view.
     */
    public function show(Event $event): Response|ResponseFactory
    {
        return inertia('Event/ShowEvent', [
            'event' => $this->eventService->getEvent($event),
        ]);
    }

    /**
     * Stores the event
     * checks if the user is an admin, validates the incoming request
     * on successful validates store the data
     */
    public function store(EventRequest $request): RedirectResponse
    {
        $event = $this->eventService->storeEvent($request->validated());

        return to_route('admin.index')->with('success', "Event {$event->title} created!");
    }

    /**
     * redirects an admin to the creation page of the event
     *
     * @throws AuthorizationException
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $teams = Team::all();

        return inertia('Event/CreateEvent', ['teams' => $teams]);
    }

    /**
     * redirects an admin to the edit page of the event
     *
     * @param  Event  $event
     *
     * @return Response|ResponseFactory
     */
    public function edit(Event $event): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        $teams = Team::all();

        return inertia('Event/EditEvent', [
            'event' => $event,
            'teams' => $teams,
        ]);
    }

    /**
     * updates the event
     * checks if the user is an admin, validates the incoming request
     * on successful validates store the data
     *
     * @param  EventRequest  $request
     * @param  Event  $event
     *
     * @throws AuthorizationException
     */
    public function update(EventRequest $request, Event $event): RedirectResponse
    {
        $event = $this->eventService->updateEvent($event, $request->validated());

        return to_route('admin.index')->with('success', "Event {$event->title} updated!");
    }

    /**
     * deletes the event
     * checks if the user is an admin, validates the incoming request
     * on successful validates store the data
     *
     * @param  Event  $event
     *
     * @return RedirectResponse
     */
    public function destroy(Event $event): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->eventService->destroyEvent($event);

        return to_route('admin.index')->with('success', "Event {$event->title} deleted!");
    }

    public function getAdminEvents(): JsonResponse
    {
        return response()->json(Event::query()
            ->orderBy('date', 'asc')
            ->paginate(10));
    }

    public function getNextFiveEvents(): JsonResponse {
        return response()->json(Event::query()
            ->where('date', '>=', now())
            ->orderBy('date', 'asc')
            ->take(5)
            ->get());
    }
}
    