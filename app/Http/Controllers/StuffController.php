<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStuffRequest;
use App\Http\Requests\UpdateStuffRequest;
use App\Models\Stuff;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

class StuffController extends Controller
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

        $validated = $request->validated([
            'user_id' => 'required|exists:users,id',
            'role' => 'required|string|max:255',
            'avatar' => 'nullable|image|max:2048',
            'about' => 'nullable|string|max:1000',
            'skills' => 'nullable|array',
            'skills.*' => 'string|max:255',
        ]);

        Stuff::create($validated);

        return redirect()->route('admin.index')->with('success', 'Stuff created successfully.');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response|ResponseFactory
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Stuff/CreateStuff');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Stuff  $stuff
     * @return Response|ResponseFactory
     */
    public function edit(Stuff $stuff): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Stuff/EditStuff', [
            'stuff' => $stuff,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  Stuff  $stuff
     * @return RedirectResponse
     */
    public function update(Request $request, Stuff $stuff): RedirectResponse
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

        $stuff->update($validated);

        return redirect()->route('admin.index')->with('success', 'Stuff updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Stuff  $stuff
     * @return RedirectResponse
     */
    public function destroy(Stuff $stuff): RedirectResponse
    {
        $this->authorize('admin', Auth::user());

        $stuff->delete();

        return redirect()->route('admin.index')->with('success', 'Stuff deleted successfully.');
    }
}
