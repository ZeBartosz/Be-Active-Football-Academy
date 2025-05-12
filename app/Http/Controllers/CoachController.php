<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CoachUpdateRequest;
use App\Models\Coach;
use App\Models\User;
use App\Services\CoachService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;
use Throwable;

/**
 * Class CoachController
 *
 * Controller responsible for managing coach-related actions, including creating,
 */
final class CoachController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly CoachService $coachService) {}

    /**
     * Displays the form for creating a new coach.
     *
     * This method authorizes that the current user is an admin and returns an Inertia response
     * rendering the create coach page.
     *
     * @return RedirectResponse The Inertia response containing the create coach view.
     *
     * @throws Throwable
     */
    public function store(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->coachService->makeCoach($user);

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been added successfully");
    }

    /**
     * Displays the edit form for a coach associated with the given user.
     *
     * Retrieves the coach record from the user model, checks that the authenticated
     * user is authorized to edit it, and returns an Inertia response rendering the coach edit page.
     *
     * @param  User  $user  The user whose coach record is to be edited.
     * @return Response|ResponseFactory The Inertia response containing the coach edit view and data.
     *
     * @throws AuthorizationException
     */
    public function edit(User $user): Response|ResponseFactory
    {
        $coach = $user->coach;

        $this->authorize('adminAndUser', [Auth::user(), $coach]);

        return inertia('Coach/EditCoach', ['coach' => $coach]);
    }

    /**
     * Soft-deletes the coach record for a given user.
     *
     * This method authorizes that the current user is an admin, updates the user model to mark
     * it as no longer being a coach, and then soft-deletes the associated coach record.
     * After deletion, a redirect response with a success message is returned.
     *
     * @param  User  $user  The user whose coach record is to be soft-deleted.
     * @return RedirectResponse A redirect response confirming the deletion.
     *
     * @throws AuthorizationException|Throwable
     */
    public function destroy(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->coachService->destroyCoach($user);

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been removed successfully");
    }

    /**
     * Updates the coach record with validated data.
     *
     * Validates the incoming request data, handles an optional avatar image upload,
     * and then updates the coach record with the validated values. On successful update,
     * the user is redirected back with a success message.
     *
     * @param  CoachUpdateRequest  $request  The HTTP request containing update data.
     * @param  Coach  $coach  The coach model to be updated.
     * @return RedirectResponse A redirect response indicating a successful update.
     *
     * @throws Throwable
     */
    public function update(CoachUpdateRequest $request, Coach $coach): RedirectResponse
    {
        $this->coachService->updateCoach($request, $coach, $request->validated());

        return to_route('home')->with('success', 'Coach updated successfully');
    }
}
