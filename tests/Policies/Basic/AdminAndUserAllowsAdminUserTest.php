<?php

declare(strict_types=1);

use App\Models\User;
use App\Policies\BasePolicy;

test('adminAndUser allows admin to access', function () {
    $policy = new BasePolicy();

    $admin = User::factory()->create([
        'is_admin' => true,
    ]);

    $user = User::factory()->create([]);
    $coach = $user->coach()->create();
    $this->actingAs($admin);

    $result = $policy->adminAndUser($admin, $coach);

    expect($result->allowed())->toBeTrue();
});
