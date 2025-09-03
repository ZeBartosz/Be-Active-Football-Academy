<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ResponsibilityRequest;
use App\Models\Event;
use App\Models\Responsibility;
use App\Services\ResponsibilityService;
use App\Services\StaffService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ResponsibilityController extends Controller
{
    use AuthorizesRequests;

    public function __construct(
        private readonly ResponsibilityService $responsibilityService,
        private readonly StaffService $staffService
    ) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(ResponsibilityRequest $request): RedirectResponse
    {
        $res = $this->responsibilityService->storeResponsibility($request->validated());

        return redirect()->route('event.show', ['event' => $res->event_id])->with('success',
            'Responsibility created.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Event $event): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Responsibility/CreateResponsibility', [
            'event' => $event,
            'staff' => $this->staffService->getStaffWithUser(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Responsibility $responsibility): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Responsibility/EditResponsibility', [
            'responsibility' => $responsibility,
            'staff' => $this->staffService->getStaffWithUser(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     */
    public function update(ResponsibilityRequest $request, Responsibility $responsibility): RedirectResponse
    {
        $this->responsibilityService->updateResponsibility($request->validated(), $responsibility);

        return redirect()->route('event.show', ['event' => $responsibility->event_id])->with('success',
            'Responsibility updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Responsibility $responsibility): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $eventId = $responsibility->event_id;

        $this->responsibilityService->deleteResponsibility($responsibility);

        return redirect()->route('event.show', ['event' => $eventId])->with('success', 'Responsibility deleted.');
    }
}
