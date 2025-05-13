<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StaffRequest;
use App\Models\Staff;
use App\Models\User;
use App\Services\StaffService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;
use Throwable;

final class StaffController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly StaffService $staffService)
    {
    }

    /**
     * Store the data
     *
     *
     * @throws Throwable
     */
    public function store(StaffRequest $request, User $user): RedirectResponse
    {

        $this->staffService->storeStaff($request->validated(), $user, $request->file('avatar'));

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

        $this->staffService->destroyStaff($user);

        return redirect()->route('admin.index')->with('success', 'Staff deleted successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @throws Throwable
     */
    public function update(StaffRequest $request, Staff $staff): RedirectResponse
    {
        $this->staffService->updateStaff($request->validated(), $staff, $request->file('avatar'));

        return redirect()->route('admin.index')->with('success', 'Staff updated successfully.');
    }
}
