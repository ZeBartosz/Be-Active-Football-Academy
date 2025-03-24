<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    use AuthorizesRequests;

    public function store(Request $request)
    {
        $this->authorize('admin', Auth::user());

        $team = $request->validate([
            'team_name' => 'required | string | max:255 | unique:teams',
        ]);

        Team::create($team);

        return redirect('/admin')->with('success', "{$team['team_name']} created successfully}");
    }

    public function create()
    {
        $this->authorize('admin', Auth::user());

        return inertia('Admin/Team/CreateTeam');
    }
}
