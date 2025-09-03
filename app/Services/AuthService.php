<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class AuthService
{
    /**
     * Authenticates a user with the provided credentials.
     *
     * @param  array<string, string>  $credentials
     */
    public function authenticate(array $credentials, Request $request): bool
    {
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return true;
        }

        return false;
    }

    /**
     * Registers a new user with the provided credentials.
     *
     * @param  array<string, string>  $credentials
     */
    public function register(array $credentials): void
    {
        $user = User::create($credentials);
        Auth::login($user);
    }

    /**
     * Logs out the currently authenticated user.
     */
    public function logout(Request $request): void
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}
