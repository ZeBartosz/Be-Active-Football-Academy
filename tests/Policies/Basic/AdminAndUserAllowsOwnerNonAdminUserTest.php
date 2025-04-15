<?php

declare(strict_types=1);

use App\Models\Coach;
use App\Models\User;
use App\Policies\BasePolicy;

test('adminAndUser allows owner non-admin user', function () {
    $user = User::factory()->create([]);
    $coach = Coach::factory()->create(['user_id' => $user->id]);
    $this->actingAs($user);

    $policy = new BasePolicy();
    $result = $policy->adminAndUser($user, $coach);

    expect($result->allowed())->toBeTrue();
});
