<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Throwable;

final class StaffService
{
    /**
     * Get all staff with user
     */
    public function getStaffWithUser(): Collection
    {
        return Staff::with('user')->get();
    }

    /**
     * Store the data
     *
     *
     *
     * @throws Throwable
     */
    public function storeStaff(array $data, User $user, UploadedFile $image): void
    {

        if ($image->isValid()) {
            $data['avatar'] = $this->setImage($image, $data['role'], $user->id);

        }

        DB::transaction(function () use ($user, $data) {
            $user->staff()->create($data);
            $user->update(['is_staff' => true]);
        });
    }

    /**
     *  Updating the staff
     *
     *
     * @throws Throwable
     */
    public function updateStaff(array $data, Staff $staff, ?UploadedFile $image): void
    {
        if ($image) {
            $data['avatar'] = $this->setImage($image, $data['role'], $staff->user_id);
        } else {
            $data['avatar'] = $staff->avatar;
        }

        $staff->update($data);
    }

    /**
     * Deletes a staff
     */
    public function destroyStaff(User $user): void
    {
        DB::transaction(function () use ($user) {
            $user->staff()->delete();
            $user->update(['is_staff' => false]);
        });
    }

    /**
     * sets the image for the staff.
     */
    private function setImage(UploadedFile $image, string $role, int $user_id): string
    {

        $file = $image;
        $extension = $file->getClientOriginalExtension();
        $fileName = $role.'_'.$user_id.'.'.$extension;

        Storage::disk('public')->putFileAs('staff', $file, $fileName);

        return "/storage/staff/$fileName";
    }
}
