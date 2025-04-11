<?php

declare(strict_types=1);

test('admin method allows admin user', function () {
    $policy = new App\Policies\BasePolicy();
    
    $admin = App\Models\User::factory()->create([
        'is_admin' => true,
    ]);

    $result = $policy->admin($admin);

    expect($result->allowed())->toBeTrue();
});
