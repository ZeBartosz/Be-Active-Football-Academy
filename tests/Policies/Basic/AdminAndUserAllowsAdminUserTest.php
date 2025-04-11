<?php

declare(strict_types=1);

test('adminAndUser allows ', function () {
    $policy = new App\Policies\BasePolicy();

    $admin = App\Models\User::factory()->create([
        'is_admin' => true,
    ]);
    $model = (object) ['user_id' => 999];

    $result = $policy->adminAndUser($admin, $model);

    expect($result->allowed())->toBeTrue();
});
