<?php

namespace App\Http\Controllers;

use App\Models\ProgramGroup;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class ProgramGroupController extends Controller
{
    use AuthorizesRequests;

    /**
     * Stores a new program group.
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {

        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'age_range' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = $validated['title'].'_'.$validated['age_range'].'.'.$extension;

            Storage::disk('public')->putFileAs('program_groups', $file, $fileName);
            $validated['image'] = "/storage/coaches/$fileName";
        }

        ProgramGroup::create($validated);

        return to_route('home')->with('success', 'Program group created successfully.');

    }

    /**
     * Displays the form for creating a new program group.
     *
     * @return Response
     */
    public function create(): Response
    {
        $this->authorize('admin', Auth::user());

        return inertia('ProgramGroups/CreateProgramGroup');
    }

    /**
     * Displays the form for editing an existing program group.
     *
     * @param  ProgramGroup  $programGroup
     * @return Response
     */
    public function edit(ProgramGroup $programGroup): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('ProgramGroups/EditProgramGroup', [
            'programGroup' => $programGroup,
        ]);
    }

    /**
     * Updates an existing program group.
     *
     * @param  Request  $request
     * @param  ProgramGroup  $programGroup
     * @return RedirectResponse
     */
    public function update(Request $request, ProgramGroup $programGroup): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'age_range' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = $validated['title'].'_'.$validated['age_range'].'.'.$extension;

            Storage::disk('public')->putFileAs('program_groups', $file, $fileName);
            $validated['image'] = "/storage/coaches/$fileName";
        }

        $programGroup->update($validated);

        return to_route('home')->with('success', 'Program group updated successfully.');
    }

    /**
     * Deletes an existing program group.
     *
     * @param  ProgramGroup  $programGroup
     * @return RedirectResponse
     */
    public function destroy(ProgramGroup $programGroup): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $programGroup->delete();

        return to_route('home')->with('success', 'Program group deleted successfully.');
    }
}
