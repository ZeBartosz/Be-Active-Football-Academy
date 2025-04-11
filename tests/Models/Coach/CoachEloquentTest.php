<?php

use App\Models\Coach;
use App\Models\User;

it('test relationship with user', function () {
    $user = User::factory()->create()->refresh();
    $coach = Coach::create([
        'user_id' => $user->id, 'avatar' => 'fasfa', 'skills' => ['skill1', 'skill2', 'skill3'],
        'about' => 'dasdas',
    ]);


    $this->assertTrue($coach->user()->exists());
});
