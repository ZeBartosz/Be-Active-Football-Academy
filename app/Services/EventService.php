<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Event;

final class EventService
{

    /**
     *
     * This method retrieves an event along with its associated responsibilities, staff, and user.
     *
     * @param  Event  $event
     *
     * @return Event
     */
    public function getEvent(Event $event): Event
    {
        return $event->load('responsibilities.staff.user');
    }

    /**
     * This method stores a new event in the database.
     *
     * @param  array  $data
     *
     * @return Event
     */
    public function storeEvent(array $data): Event
    {
        return Event::create($data);
    }

    /**
     * This method updates an existing event in the database.
     *
     * @param  Event  $event
     * @param  array  $data
     *
     * @return Event
     */
    public function updateEvent(Event $event, array $data): Event
    {
        $event->update($data);

        return $event;
    }

    /**
     * This method deletes an event from the database.
     *
     * @param  Event  $event
     *
     * @return void
     */
    public function destroyEvent(Event $event): void
    {
        $event->delete();
    }
}
