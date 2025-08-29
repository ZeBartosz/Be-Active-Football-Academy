<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\AdminService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class AdminController
 *
 * Controller responsible for handling administrative functions
 */
final class AdminController extends Controller
{
    use AuthorizesRequests;

    /**
     * Constructor for the AdminController.
     *
     * This constructor initializes the controller with the AdminService instance
     * and applies the 'can:admin' middleware to all routes in this controller.
     *
     * @param  AdminService  $adminService  The service responsible for admin-related operations.
     */
    public function __construct(private readonly AdminService $adminService)
    {
        $this->authorize('admin', Auth::user());
    }

    /**
     * Displays the admin dashboard.
     *
     * This action returns an Inertia response that renders the "Admin/AdminDashboard" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     * - `coaches`: a collection of all Coach models with their associated User models.
     * - `staff`: a collection of all Staff models with their associated User models.
     * - `teams`: a collection of all Team models with their associated Coaches and Player counts.
     * - `players`: a collection of all Player models with their associated User and Team models.
     * - `events`: a collection of all Event models.
     * - `userCount`: the total number of users.
     * - `coachCount`: the total number of coaches.
     * - `playerCount`: the total number of players.
     * - `nextEvent`: a collection of the next upcoming events, limited to 5.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the dashboard data.
     */
    public function index(): Response|ResponseFactory
    {
        return inertia('Admin/AdminDashboard', [
            'data' => $this->adminService->getAdminDashboardData(),
        ]);
    }

    /**
     * Redirects the admin to the user management page.
     *
     * This action returns an Inertia response that renders the "Admin/Users" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     *
     * @return RedirectResponse An Inertia response instance containing the user management data.
     */
    public function grantAdmin(User $user): RedirectResponse
    {
        $user = $this->adminService->setAdminStatus($user, true);

        return redirect()->back()->with(
            'success', "{$user->first_name} {$user->last_name} updated successfully"
        );
    }

    /**
     * Redirects the admin to the user management page.
     *
     * This action returns an Inertia response that renders the "Admin/Users" page.
     * The response data array contains:
     * - `users`: a collection of all User models.
     *
     * @return RedirectResponse An Inertia response instance containing the user management data.
     */
    public function revokeAdmin(User $user): RedirectResponse
    {
        $user = $this->adminService->setAdminStatus($user, false);

        return redirect()->back()->with(
            'success',
            "{$user->first_name} {$user->last_name} updated successfully"
        );
    }
}
