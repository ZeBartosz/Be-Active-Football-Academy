<?php

declare(strict_types=1);

test('Check redirect to register page', function () {
    $this->get('/register')
        ->assertStatus(200)
        ->assertSee('Register');
});

test('Check redirect to login page', function () {
    $this->get('/login')
        ->assertStatus(200)
        ->assertSee('Login');
});

test('Registering a user', function () {
    $data = [
        'first_name' => 'first',
        'last_name' => 'second',
        'email' => 'email@email.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ];

    $this->post('/register', $data)->assertStatus(302)->assertRedirect('/');
    $this->assertDatabaseHas('users', ['first_name' => 'first', 'last_name' => 'second', 'email' => 'email@email.com']);
});

test('Login a user', function () {
    $user = App\Models\User::factory()->create(['email' => 'email@email.com', 'password' => 'password']);
    $data = [
        'email' => 'email@email.com',
        'password' => 'password',
    ];

    $this->assertDatabaseHas('users', ['email' => 'email@email.com']);
    $this->post('/login', $data)->assertStatus(302)->assertRedirect('/');
    $this->assertAuthenticatedAs($user);
});

test('Login user with incorrect details ', function () {
    $user = App\Models\User::factory()->create(['email' => 'email@email.com', 'password' => 'correct_password']);
    $data = [
        'email' => 'wrong@email.com',
        'password' => 'wrong_password',
    ];

    $this->assertDatabaseHas('users', ['email' => 'email@email.com']);
    $this->post('/login', $data)->assertStatus(302)->assertSessionHasErrors(['email', 'password']);
    $this->assertGuest();
});

test('Logout User', function () {
    $user = App\Models\User::factory()->create(['email' => 'email@email.com', 'password' => 'password']);

    $this->actingAs($user);
    $this->assertAuthenticatedAs($user);
    $this->post('/logout')->assertStatus(302)->assertRedirect('/');
    $this->assertGuest();
});
