<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\Coach;
use App\Models\User;
use App\Policies\BasePolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

final class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::policy(User::class, BasePolicy::class);
        Gate::policy(Coach::class, BasePolicy::class);
    }
}
