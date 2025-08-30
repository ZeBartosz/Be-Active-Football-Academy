<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\AuthAuthenticateRequest;
use App\Http\Requests\AuthRegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class AuthController
 *
 * This controller handles user authentication actions, including
 * presenting registration and login pages, authenticating users,
 * user registration, and logging out.
 */
final class AuthController extends Controller
{
    public function __construct(private readonly AuthService $authService) {}

    /**
     * Logs in the user with the provided valid credentials.
     *
     * Validates the incoming request data for email and password,
     * then attempts to authenticate the user. On successful authentication,
     * the session is regenerated and the user is redirected to their intended location.
     * On failure, the user is redirected back with error messages.
     *
     * @param  AuthAuthenticateRequest  $request  The HTTP request containing login credentials.
     * @return RedirectResponse A redirect response after attempting authentication.
     */
    public function authenticate(AuthAuthenticateRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if ($this->authService->authenticate($credentials, $request)) {
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
     * @param  AuthRegisterRequest  $request  The HTTP request containing registration data.
     * @return RedirectResponse A redirect response after the user is registered.
     */
    public function store(AuthRegisterRequest $request): RedirectResponse
    {
        $this->authService->register($request->validated());

        return redirect('/')->with('success', 'Account Created Successfully.');
    }

    /**
     * Redirects the guest to the registration page.
     *
     * This action returns an Inertia response that renders the "Auth/Register" page.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the registration view.
     */
    public function register(): Response|ResponseFactory
    {
        return Inertia::render('Auth/Register');
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
        return Inertia::render('Auth/Login');
    }

    /**
     * Logs out the currently authenticated user.
     *
     * This action invalidates the session, regenerates the CSRF token,
     * and redirects the user to the homepage with a success message.
     *
     * @param  Request  $request  The HTTP request for logging out.
     * @return RedirectResponse A redirect response after logging out.
     */
    public function logout(Request $request): RedirectResponse
    {

        $this->authService->logout($request);

        return redirect('/')->with('success', 'You have been logged out.');
    }
}
