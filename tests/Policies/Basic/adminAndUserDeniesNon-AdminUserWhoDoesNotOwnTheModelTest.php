<?php

test('adminAndUser denies non-admin user who does not own the model', function () {
    $policy = new \App\Policies\BasePolicy();

    $user = \App\Models\User::factory()->create([
        'id' => 1
    ]);

    $model = (object) ['user_id' => 2];
    $result = $policy->adminAndUser($user, $model);

    expect($result->allowed())->toBeFalse();
});
