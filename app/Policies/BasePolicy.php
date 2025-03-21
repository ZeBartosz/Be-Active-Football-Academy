<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

final class BasePolicy
{
    use HandlesAuthorization;

    public function adminAndUser(User $user, $model): Response
    {
        return $user->is_admin === true || $user->id === $model->user_id
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    public function admin(User $user): Response
    {
        return $user->is_admin === true
            ? Response::allow()
            : Response::denyAsNotFound();
    }
}
