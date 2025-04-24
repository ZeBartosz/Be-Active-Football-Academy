<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class CoachController
 *
 * Controller responsible for managing coach-related actions, including creating,
 */
final class CoachController extends Controller
{
    use AuthorizesRequests;

    /**
     * Stores a coach record for a given user.
     *
     * This method first checks that the currently authenticated user has admin
     * privileges. Then, it updates the provided user model to mark it as a coach.
     * It attempts to find a soft-deleted coach record for the user and restores it if available,
     * otherwise it creates a new coach record with a default "about" message and avatar.
     * Finally, it redirects back with a success message.
     *
     * @param  User  $user  The user that is being promoted to a coach.
     * @return RedirectResponse A redirect response with a success message.
     *
     * @throws AuthorizationException
     */
    public function store(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $user->update(['is_coach' => true]);

            $user->coach()->withTrashed()->first()?->restore()
            ?? $user->coach()->create([
            'about' => "Hello, My name is {$user->first_name} and I am a coach at BAFA",
            'avatar' => '/storage/coaches/default_pfp.png',
        ]);

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been added successfully");
    }

    /**
     * Updates the coach record with validated data.
     *
     * Validates the incoming request data, handles an optional avatar image upload,
     * and then updates the coach record with the validated values. On successful update,
     * the user is redirected back with a success message.
     *
     * @param  Request  $request  The HTTP request containing update data.
     * @param  Coach  $coach  The coach model to be updated.
     * @return RedirectResponse A redirect response indicating a successful update.
     */
    public function update(Request $request, Coach $coach): RedirectResponse
    {
        $this->authorize('adminAndUser', $coach);

        $validated = $request->validate([
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:3000',
            'about' => 'required|string|max:255',
            'skills' => 'array|max:5',
            'skills.*' => 'string|max:155',
        ]);

        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $extension = $file->getClientOriginalExtension();
            $fileName = $coach->id.'_'.$coach->user_id.'.'.$extension;

            Storage::disk('public')->putFileAs('coaches', $file, $fileName);
            $validated['avatar'] = "/storage/coaches/$fileName";
        } else {
            unset($validated['avatar']);
        }

        $coach->update($validated);

        return to_route('home')->with('success', 'Coach updated successfully');
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

        $this->authorize('adminAndUser', $coach);

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
     * @throws AuthorizationException
     */
    public function destroy(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $user->update(['is_coach' => false]);

        $user->coach()->delete();

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been removed successfully");
    }
}
