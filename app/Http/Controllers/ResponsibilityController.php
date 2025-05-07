<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Responsibility;
use App\Models\Staff;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class ResponsibilityController extends Controller
{
    use AuthorizesRequests;

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'staff_id' => 'required|exists:staff,id',
            'description' => 'required|string|max:500',
        ]);

        Responsibility::create($validated);

        return redirect()->route('event.show', ['event' => $validated['event_id']])->with('success',
            'Responsibility created.');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @param  Event  $event
     */

    public function create(Event $event)
    {
        $this->authorize('admin', Auth::user());

        $staff = Staff::with('user')->get();

        return inertia('Responsibility/CreateResponsibility', [
            'event' => $event,
            'staff' => $staff,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Responsibility  $responsibility
     */
    public function edit(Responsibility $responsibility)
    {
        $this->authorize('admin', Auth::user());

        $staff = Staff::with('user')->get();

        return inertia('Responsibility/EditResponsibility', [
            'responsibility' => $responsibility,
            'staff' => $staff,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  Responsibility  $responsibility
     * @return RedirectResponse
     */
    public function update(Request $request, Responsibility $responsibility): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'staff_id' => 'required|exists:staff,id',
            'description' => 'required|string|max:500',
        ]);

        $responsibility->update($validated);

        return redirect()->route('event.show', ['event' => $validated['event_id']])->with('success',
            'Responsibility updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Responsibility  $responsibility
     * @return RedirectResponse
     */
    public function destroy(Responsibility $responsibility): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $eventId = $responsibility->event_id;

        $responsibility->delete();

        return redirect()->route('event.show', ['event' => $eventId])->with('success', 'Responsibility deleted.');
    }
}
