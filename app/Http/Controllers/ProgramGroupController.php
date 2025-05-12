<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ProgramGroupRequest;
use App\Models\ProgramGroup;
use App\Services\ProgramGroupService;
use App\Services\ProgramService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ProgramGroupController extends Controller
{
    use AuthorizesRequests;

    public function __construct(
        private readonly ProgramGroupService $programGroupService,
        private readonly ProgramService $programService
    ) {
    }

    /**
     * Displays a list of program groups.
     */
    public function index(): Response|ResponseFactory
    {
        return inertia('ProgramGroups/ProgramGroupIndex', [
            'programGroups' => $this->programGroupService->getProgramGroups(),
        ]);
    }

    /**
     * Displays a list of program groups.
     */
    public function show(ProgramGroup $programGroup): ResponseFactory|Response
    {
        return inertia('ProgramGroups/ShowProgramGroup', [
            'programGroups' => $programGroup,
            'programs' => $this->programService->getPrograms($programGroup),
        ]);
    }

    /**
     * Stores a new program group.
     */
    public function store(ProgramGroupRequest $request): RedirectResponse
    {
        $this->programGroupService->storeProgramGroup($request->validated(), $request->file('image'));

        return to_route('home')->with('success', 'Program group created successfully.');

    }

    /**
     * Displays the form for creating a new program group.
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('ProgramGroups/CreateProgramGroup');
    }

    /**
     * Displays the form for editing an existing program group.
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
     */
    public function update(ProgramGroupRequest $request, ProgramGroup $programGroup): RedirectResponse
    {
        $this->programGroupService->updateProgramGroup($programGroup, $request->validated(), $request->file('image'));

        return to_route('home')->with('success', 'Program group updated successfully.');
    }

    /**
     * Deletes an existing program group.
     */
    public function destroy(ProgramGroup $programGroup): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->programGroupService->deleteProgramGroup($programGroup);

        return to_route('home')->with('success', 'Program group deleted successfully.');
    }
}
