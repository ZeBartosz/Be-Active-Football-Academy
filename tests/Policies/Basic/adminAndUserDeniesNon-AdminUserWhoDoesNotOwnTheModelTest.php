<?php

declare(strict_types=1);

use App\Models\Coach;
use App\Models\User;
use App\Policies\BasePolicy;

test('adminAndUser denies non-admin user who does not own the model', function () {
    $users = User::factory(2)->create([]);
    $coach = Coach::factory()->create(['user_id' => $users[0]->id]);
    $this->actingAs($users[1]);

    $policy = new BasePolicy();
    $result = $policy->adminAndUser($users[1], $coach);

    expect($result->allowed())->toBeFalse();
});
