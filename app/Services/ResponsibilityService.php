<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Responsibility;

final class ResponsibilityService
{
    /**
     * Store a newly created resource in storage.
     */
    public function storeResponsibility(array $data): Responsibility
    {
        return Responsibility::create($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateResponsibility(array $data, Responsibility $responsibility): void
    {
        $responsibility->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deleteResponsibility(Responsibility $responsibility): void
    {
        $responsibility->delete();
    }
}
