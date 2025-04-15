<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class AuthController
 *
 * This controller handles user authentication actions, including
 * presenting registration and login pages, authenticating users,
 * user registration, and logging out.
 *
 * @package App\Http\Controllers
 */
final class AuthController extends Controller
{
    /**
     * Redirects the guest to the registration page.
     *
     * This action returns an Inertia response that renders the "Auth/Register" page.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the registration view.
     */
    public function register(): Response|ResponseFactory
    {
        return inertia('Auth/Register');
    }

    /**
     * Logs in the user with the provided valid credentials.
     *
     * Validates the incoming request data for email and password,
     * then attempts to authenticate the user. On successful authentication,
     * the session is regenerated and the user is redirected to their intended location.
     * On failure, the user is redirected back with error messages.
     *
     * @param  Request  $request  The HTTP request containing login credentials.
     * @return RedirectResponse A redirect response after attempting authentication.
     */
    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        /** @var array<string, string> $credentials */
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
     * Registers a new user using the provided credentials.
     *
     * Validates the incoming request for required fields, creates a new user,
     * logs the user in, and then redirects to the homepage with a success message.
     *
     * @param  Request  $request  The HTTP request containing registration data.
     * @return RedirectResponse A redirect response after the user is registered.
     */
    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'number' => 'required|string|min:11',
            'date_of_birth' => 'required|date|before:today',
            'address' => 'required|string|max:500',
            'post_code' => 'required|string|max:6',
            'password' => 'required|string|min:6|confirmed',
        ]);

        /** @var array<string, string> $credentials */
        $user = User::create($credentials);

        Auth::login($user);

        return redirect('/')->with('success', 'Account Created Successfully. Please log in.');
    }

    /**
     * Redirects the guest to the login page.
     *
     * This action returns an Inertia response that renders the "Auth/Login" page.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the login view.
     */
    public function login(): Response|ResponseFactory
    {
        return inertia('Auth/Login');
    }

    /**
     * Logs out the current user.
     *
     * This action logs out the user by invalidating the session and regenerating the session token,
     * then redirects the user to the homepage with a success message.
     *
     * @param  Request  $request  The HTTP request instance.
     * @return RedirectResponse A redirect response after the user is logged out.
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('success', 'You have been logged out.');
    }
}
