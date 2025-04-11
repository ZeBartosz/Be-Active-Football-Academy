<?php

declare(strict_types=1);

test('admin method denies non-admin user', function () {
    $policy = new App\Policies\BasePolicy();

    $user = App\Models\User::factory()->create([]);
    $result = $policy->admin($user);

    expect($result->allowed())->toBeFalse();
});
