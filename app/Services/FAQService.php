<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\FAQ;
use Illuminate\Database\Eloquent\Collection;

final class FAQService
{
    /**
     * Store a newly created FAQ in the database.
     *
     * This action validates the incoming request data for the FAQ,
     * creates a new FAQ record in the database, and redirects to the FAQ list
     * with a success message.
     *
     * @return Collection @return EloquentCollection<int, FAQ>
     */
    public function getFAQs(): Collection
    {
        return FAQ::all();
    }

    /**
     * Store a newly created FAQ in the database.
     *
     * This action validates the incoming request data for the FAQ,
     * creates a new FAQ record in the database, and redirects to the FAQ list
     * with a success message.
     *
     * @param  array  $FAQ  The HTTP request containing FAQ data.
     */
    public function storeFAQ(array $FAQ): void
    {
        FAQ::create($FAQ);
    }

    /**
     * Update an existing FAQ in the database.
     *
     * This action validates the incoming request data for the FAQ,
     * updates the existing FAQ record in the database, and redirects to the FAQ list
     * with a success message.
     */
    public function updateFAQ(array $data, FAQ $faq): void
    {
        $faq->update($data);
    }

    /**
     * Delete an existing FAQ from the database.
     *
     * This action deletes the specified FAQ record from the database.
     */
    public function destroyFAQ(FAQ $faq): void
    {
        $faq->delete();
    }
}
