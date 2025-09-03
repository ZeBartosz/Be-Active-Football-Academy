<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Player;

final class PlayerService
{
    /**
     * Store a new player in the database.
     *
     * @param  array  $data  The data to create the player with.
     */
    public function storePlayer(array $data): void
    {
        Player::create($data);
    }

    /**
     * Update an existing player in the database.
     *
     * @param  Player  $player  The player instance to update.
     * @param  array  $data  The data to update the player with.
     * @return void True if the player was updated successfully, false otherwise.
     */
    public function updatePlayer(Player $player, array $data): void
    {
        $player->update($data);
    }

    /**
     * Delete a player from the database.
     *
     * @param  Player  $player  The player instance to delete.
     */
    public function deletePlayer(Player $player): void
    {
        $player->delete();
    }
}
