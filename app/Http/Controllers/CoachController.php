<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;

final class CoachController extends Controller
{
    public function store(User $user)
    {
        $user->update(['is_coach' => true]);

            $user->coach()->withTrashed()->first()?->restore() ?? $user->coach()->create();

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been added successfully");

    }

    public function destroy(User $user)
    {
        $user->update(['is_coach' => false]);
        
        $user->coach()->delete();

        return redirect()->back()->with('success',
            "Coach {$user->first_name} {$user->last_name} has been removed successfully");
    }
}
