<?php

test('adminAndUser allows owner non-admin user', function () {
    $policy = new \App\Policies\BasePolicy();

    $user = \App\Models\User::factory()->create();
    $model = (object) ['user_id' => 1];

    $result = $policy->adminAndUser($user, $model);

    expect($result->allowed())->toBeTrue();
});
