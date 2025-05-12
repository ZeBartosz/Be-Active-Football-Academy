<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\ProgramGroup;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

final class ProgramGroupService
{
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
            $data['image'] = $this->setImage(($image), $data['title'], $data['age_range']);
        }

        ProgramGroup::create($data);
    }

    /**
     * sets the image for the program group.
     */
    private function setImage(UploadedFile $image, string $title, string $age_range): string
    {

        $file = $image;
        $extension = $file->getClientOriginalExtension();
        $fileName = $title.'_'.$age_range.'.'.$extension;

        Storage::disk('public')->putFileAs('program_groups', $file, $fileName);

        return "/storage/program_groups/$fileName";

    }

    /**
     * Deletes a program group.
     */
    public function updateProgramGroup(ProgramGroup $programGroup, array $data, ?UploadedFile $image): void
    {
        ;
        if ($image) {
            $data['image'] = $this->setImage(($image), $data['title'], $data['age_range']);
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
