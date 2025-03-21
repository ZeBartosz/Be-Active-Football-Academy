<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;

final class BasePolicy
{
    public function adminAndUser(User $user, $model): bool
    {
        return $user->is_admin === true || $user->id === $model->user_id;
    }

    public function admin(User $user): bool
    {
        return $user->is_admin === true;
    }
}
