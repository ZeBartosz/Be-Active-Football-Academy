<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Staff;

final class StaffService
{
    public function getStaffWithUser()
    {
        return Staff::with('user')->get();
    }
}
