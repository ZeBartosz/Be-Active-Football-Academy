<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

final class ImageUploadService
{
    /**
     * Sets the image for the program group.
     *
     * @param  UploadedFile  $image  The image file to be uploaded.
     * @param  string  $storagePath  The path where the image will be stored.
     * @param  string  $title  The title of the image.
     * @param  string  $age_range  The age range associated with the image.
     * @return string The URL of the uploaded image.
     */
    public function setImage(UploadedFile $image, string $storagePath, string $title, string $age_range): string
    {

        $file = $image;
        $extension = $file->getClientOriginalExtension();
        $fileName = $title.'_'.$age_range.'.'.$extension;

        Storage::disk('public')->putFileAs($storagePath, $file, $fileName);

        return "/storage/$storagePath/$fileName";

    }
}
