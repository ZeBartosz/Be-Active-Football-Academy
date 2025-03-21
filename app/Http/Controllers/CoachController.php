<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

final class CoachController extends Controller
{
    public function store(User $user)
    {
        $user->update(['is_coach' => true]);

            $user->coach()->withTrashed()->first()?->restore() ?? $user->coach()->create([
            'about' => "Hello, My name is {$user->first_name} and I am a coach at BAFA",
            'avatar' => '/storage/qrCode/default_pfp.png',
        ]);

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been added successfully");

    }

    public function update(Request $request, Coach $coach)
    {

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

        return redirect()->back()->with('success', 'Coach updated successfully');
    }

    public function edit(User $user)
    {
        $coach = $user->coach;

        return inertia('Coach/EditCoach', ['coach' => $coach]);
    }

    public function destroy(User $user)
    {
        $user->update(['is_coach' => false]);

        $user->coach()->delete();

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been removed successfully");
    }
}
