<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ProgramRequest;
use App\Models\Program;
use App\Models\ProgramGroup;
use App\Services\ProgramService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ProgramController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly ProgramService $programService)
    {
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @param  ProgramGroup  $programGroup
     * @return RedirectResponse
     */
    public function store(ProgramRequest $request, ProgramGroup $programGroup): RedirectResponse
    {
        $this->programService->storeProgram($request->validated(), $programGroup);

        return to_route('home')->with('success', 'Program created successfully.');
    }

    /**
     * Display a listing of the resource.
     *
     * @param  ProgramGroup  $programGroup
     * @return Response|ResponseFactory
     */
    public function create(ProgramGroup $programGroup): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Program/CreateProgram', [
            'programGroup' => $programGroup,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Program  $program
     * @return Response|ResponseFactory
     */
    public function edit(Program $program): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Program/EditProgram', [
            'program' => $program,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProgramRequest  $request
     * @param  Program  $program
     * @return RedirectResponse
     */
    public function update(ProgramRequest $request, Program $program): RedirectResponse
    {
        $this->programService->updateProgram($request->validated(), $program);

        return to_route('home')->with('success', 'Program updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Program  $program
     * @return RedirectResponse
     */
    public function destroy(Program $program): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $this->programService->deleteProgram($program);

        return to_route('home')->with('success', 'Program deleted successfully.');
    }


}
