<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{

    use AuthorizesRequests;

    public function store(Request $request)
    {
        $this->authorize('admin', Auth::user());

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:500',
            'type' => 'required|max:255',
            'date' => 'required|date|after:today',
            'time' => 'required|date_format:H:i',
            'team_id' => 'nullable|exists:teams,id',
            'address' => 'required|max:255',
            'post_code' => 'required|max:7|min:6',
        ]);

        Event::create($validatedData);

        return redirect('/admin')->with('success', "Event {$validatedData['title']} created!");
    }

    public function create()
    {
        $this->authorize('admin', Auth::user());

        $teams = Team::all();

        return inertia('Event/CreateEvent', ['teams' => $teams]);
    }
}
