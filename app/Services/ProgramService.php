<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Program;
use App\Models\ProgramGroup;
use Illuminate\Support\Collection;

final class ProgramService
{
    /**
     * Get all programs in the specified program group.
     */
    public function getPrograms(ProgramGroup $programGroup): Collection
    {
        return $programGroup->programs()->get();
    }

    /**
     * Store a newly created program in the specified program group.
     */
    public function storeProgram(array $data, ProgramGroup $programGroup): void
    {
        $programGroup->programs()->create($data);
    }

    /**
     * Update the specified program in the specified program group.
     */
    public function updateProgram(array $data, Program $program): void
    {
        $program->update($data);
    }

    /**
     * Delete the specified program.
     */
    public function deleteProgram(Program $program): void
    {
        $program->delete();
    }
}
