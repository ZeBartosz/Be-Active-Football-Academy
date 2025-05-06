<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;
use Inertia\ResponseFactory;

final class StaffController extends Controller
{
    use AuthorizesRequests;

    /**
     * Store the data
     *
     * @param  Request  $request
     * @param  User  $user
     * @return RedirectResponse
     */
    public function store(Request $request, User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'role' => 'required|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:3000',
            'about' => 'nullable|string|max:1000',
            'skills' => 'nullable|array',
            'skills.*' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $extension = $file->getClientOriginalExtension();
            $fileName = $staff->id.'_'.$staff->user_id.'.'.$extension;

            Storage::disk('public')->putFileAs('$staff', $file, $fileName);
            $validated['avatar'] = "/storage/staff/$fileName";
        }

        $user->staff()->create($validated);
        $user->update(['is_staff' => true]);


        return redirect()->route('admin.index')->with('success', 'Staff created successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(User $user): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Staff/CreateStaff', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Staff $staff): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'role' => 'required|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:3000',
            'about' => 'nullable|string|max:1000',
            'skills' => 'nullable|array',
            'skills.*' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $extension = $file->getClientOriginalExtension();
            $fileName = $staff->id.'_'.$staff->user_id.'.'.$extension;

            Storage::disk('public')->putFileAs('$staff', $file, $fileName);
            $validated['avatar'] = "/storage/staff/$fileName";
        } else {
            unset($validated['avatar']);
        }

        $staff->update($validated);

        return redirect()->route('admin.index')->with('success', 'Staff updated successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Staff $staff): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Staff/EditStaff', [
            'staff' => $staff,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user): RedirectResponse
    {
        $this->authorize('admin', Auth::user());
        
        $user->staff()->delete();

        $user->update(['is_staff' => false]);

        return redirect()->route('admin.index')->with('success', 'Staff deleted successfully.');
    }
}
