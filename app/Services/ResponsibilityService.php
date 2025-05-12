<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Responsibility;

final class ResponsibilityService
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  array  $data
     * @return Responsibility
     */
    public function storeResponsibility(array $data): Responsibility
    {
        return Responsibility::create($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  array  $data
     * @param  Responsibility  $responsibility
     * @return void
     */
    public function updateResponsibility(array $data, Responsibility $responsibility): void
    {
        $responsibility->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Responsibility  $responsibility
     * @return void
     */
    public function deleteResponsibility(Responsibility $responsibility): void
    {
        $responsibility->delete();
    }
}
