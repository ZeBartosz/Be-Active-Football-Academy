<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\ContactInfo;
use Illuminate\Database\Eloquent\Collection;

final class ContactInfoService
{
    public function getAll(): Collection
    {
        return ContactInfo::all();
    }

    public function getFirst(): ?ContactInfo
    {
        return ContactInfo::query()->latest('id')->first();
    }

    public function store(array $data): ContactInfo
    {
        return ContactInfo::create($data);
    }

    public function update(ContactInfo $contactInfo, array $data): void
    {
        $contactInfo->update($data);
    }

    public function destroy(ContactInfo $contactInfo): void
    {
        $contactInfo->delete();
    }
}


