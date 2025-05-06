<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class StaffController extends Controller
{
    use AuthorizesRequests;

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validated([
            'user_id' => 'required|exists:users,id',
            'role' => 'required|string|max:255',
            'avatar' => 'nullable|image|max:2048',
            'about' => 'nullable|string|max:1000',
            'skills' => 'nullable|array',
            'skills.*' => 'string|max:255',
        ]);

        Staff::create($validated);

        return redirect()->route('admin.index')->with('success', 'Staff created successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Staff/CreateStaff');
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Staff $staff): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validated([
            'user_id' => 'required|exists:users,id',
            'role' => 'required|string|max:255',
            'avatar' => 'nullable|image|max:2048',
            'about' => 'nullable|string|max:1000',
            'skills' => 'nullable|array',
            'skills.*' => 'string|max:255',
        ]);

        $staff->update($validated);

        return redirect()->route('admin.index')->with('success', 'Staff updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Staff $staff): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $staff->delete();

        return redirect()->route('admin.index')->with('success', 'Staff deleted successfully.');
    }
}
