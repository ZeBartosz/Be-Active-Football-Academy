<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Model;

final class BasePolicy
{
    use HandlesAuthorization;

    /**
     * Checks if a user is an admin or the owner of the given model
     *
     * @param  Model  $model  A model instance that has a `user_id` property
     */
    public function adminAndUser(User $user, Model $model): Response
    {
        return ($user->getRoleNames()->contains('Admin') || $user->id === $model->user_id)
            ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Checks if a user is an admin
     */
    public function admin(User $user): Response
    {
        return $user->getRoleNames()->contains('Admin')
            ? Response::allow()
            : Response::denyAsNotFound();
    }
}
