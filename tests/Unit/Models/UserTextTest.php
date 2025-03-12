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
            'first_name',
            'last_name',
            'email',
            'created_at',
            'updated_at',
        ]);
    }
}
