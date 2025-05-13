<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Team;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Throwable;

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

    /**
     * Retrieves all coaches associated with a given team.
     *
     * @param  Team  $team  The team instance to retrieve coaches for.
     * @return array A collection of coaches associated with the team.
     */
    public function getCoachesForTeam(Team $team): array
    {
        return $team->coaches()->pluck('coach_id')->toArray();
    }

    /**
     * Stores a new team in the database.
     *
     * @param  array  $data  The data to create a new team.
     * @return Team The created team instance.
     *
     * @throws Throwable
     */
    public function storeTeam(array $data): Team
    {
        return DB::transaction(function () use ($data) {

            $team = Team::create(['team_name' => $data['team_name']]);

            $team->coaches()->sync($data['coach_id']);

            return $team;
        });
    }

    /**
     * Updates an existing team in the database.
     *
     * @param  Team  $team  The team instance to update.
     * @param  array  $data  The data to update the team.
     * @return Team The updated team instance.
     *
     * @throws Throwable
     */
    public function updateTeam(Team $team, array $data): Team
    {
        return DB::transaction(function () use ($team, $data) {

            $team->update(['team_name' => $data['team_name']]);

            $team->coaches()->sync($data['coach_id']);

            return $team;
        });
    }

    /**
     * Deletes a team from the database.
     *
     * @param  Team  $team  The team instance to delete.
     *
     * @throws Throwable
     */
    public function deleteTeam(Team $team): void
    {
        DB::transaction(function () use ($team) {
            $team->coaches()->detach();
            $team->delete();
        });
    }
}
