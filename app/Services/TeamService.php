<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Team;
use Illuminate\Support\Collection;

final class TeamService
{

    /**
     * TeamService handles the business logic related to teams.
     * It provides methods to retrieve all teams.
     *
     * @return Collection<Team> A collection of all teams in the database.
     */
    public function getTeams(): Collection
    {
        return Team::all();
    }
}
