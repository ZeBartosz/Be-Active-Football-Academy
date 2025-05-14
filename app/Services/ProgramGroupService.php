<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\ProgramGroup;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;

final class ProgramGroupService
{
    public function __construct(private readonly ImageUploadService $imageUploadService) {}

    /**
     * Retrieves all program groups.
     */
    public function getProgramGroups(): Collection
    {
        return ProgramGroup::all();
    }

    /**
     * Stores a new program group.
     */
    public function storeProgramGroup(array $data, ?UploadedFile $image): void
    {
        if ($image) {
            $data['image'] = $this->imageUploadService->setImage($image, 'program_groups', $data['title'],
                $data['age_range']);
        }

        ProgramGroup::create($data);
    }

    /**
     * Deletes a program group.
     */
    public function updateProgramGroup(ProgramGroup $programGroup, array $data, ?UploadedFile $image): void
    {

        if ($image) {
            $data['image'] = $this->imageUploadService->setImage(($image), 'program_groups', $data['title'],
                $data['age_range']);
        } else {
            $data['image'] = $programGroup->image;
        }

        $programGroup->update($data);
    }

    /**
     * Deletes a program group.
     */
    public function deleteProgramGroup(ProgramGroup $programGroup): void
    {
        $programGroup->delete();
    }
}
