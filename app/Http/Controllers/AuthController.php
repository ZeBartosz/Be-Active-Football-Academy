<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class AuthController extends Controller
{
    /**
     * Redirect to login page
     */
    public function login(): RedirectResponse
    {
        return inertia('Auth/Login');
    }

    /**
     * Redirect to register page
     */
    public function register(): RedirectResponse
    {
        return inertia('Auth/Register');
    }

    /**
     * Login the user with valid credentials.
     */
    public function authenticate(Request $request): RedirectResponse
    {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
            'password' => 'The provided credentials do not match our records.',
        ]);

    }

    /**
     * Register a user with valid credentials
     */
    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $user = User::create($credentials);

        Auth::login($user);

        return redirect('/')->with('success', 'Account Created Successfully. Please log in.');
    }

    /**
     * Logout a User
     */
    public function logout(Request $request): RedirectResponse
    {

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('success', 'You have been logged out.');
    }
}
