<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Coach;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Throwable;

final class CoachService
{
    /**
     * Stores a coach record for a given user.
     *
     * @param  User  $user  The user that is being promoted to a coach.
     *
     * @throws Throwable
     */
    public function makeCoach(User $user): void
    {
        DB::transaction(function () use ($user) {
            $user->update(['is_coach' => true]);
            $defaults = [
                'about' => "Hello, my name is {$user->first_name} and I am a coach at BAFA.",
                'avatar' => '/storage/coaches/default_pfp.png',
            ];

            $coach = Coach::withTrashed()->firstOrNew(['user_id' => $user->id]);

            if ($coach->exists && $coach->trashed()) {
                $coach->restore();
            }

            if (!$coach->exists) {
                $coach->fill($defaults);
                $coach->user()->associate($user);
            }

            $coach->save();
        });
    }

    /**
     * Updates the coach record with the provided data.
     *
     * @param  Request  $request  The request containing the data to update.
     * @param  Coach  $coach  The coach record to update.
     * @param  array<string, mixed>  $data  The data to update the coach record with.
     *
     * @throws Throwable
     */
    public function updateCoach(Request $request, Coach $coach, array $data): void
    {
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $extension = $file->getClientOriginalExtension();
            $fileName = $coach->id.'_'.$coach->user_id.'.'.$extension;

            Storage::disk('public')->putFileAs('coaches', $file, $fileName);
            $data['avatar'] = "/storage/coaches/$fileName";
        } else {
            unset($data['avatar']);
        }

        $coach->update($data);
    }

    /**
     * Soft-deletes the coach record for a given user.
     *
     * @param  User  $user  The user whose coach record is to be deleted.
     *
     * @throws Throwable
     */
    public function destroyCoach(User $user): void
    {
        DB::transaction(function () use ($user) {
            $user->update(['is_coach' => false]);

            $coach = $user->coach;

            if ($coach) {
                $coach->delete();
            }
        });
    }
}
