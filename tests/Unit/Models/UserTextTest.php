<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;

final class UserTest extends TestCase
{
    public function test_to_array()
    {
        $user = User::factory()->create()->refresh();

        expect(array_keys($user->toArray()))->toBe([
            'id',
            'name',
            'email',
            'email_verified_at',
            'created_at',
            'updated_at',
        ]);
    }
}
