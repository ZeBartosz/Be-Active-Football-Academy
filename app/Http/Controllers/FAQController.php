<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\FAQRequest;
use App\Models\FAQ;
use App\Services\FAQService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

/**
 * Class FAQController
 *
 * This controller handles the management of Frequently Asked Questions (FAQs).
 * It provides methods to list, create, edit, update, and delete FAQs.
 */
final class FAQController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly FAQService $faqService) {}

    /**
     * Display a listing of the FAQs.
     *
     * This action retrieves all FAQs from the database and returns an Inertia response
     * to render the FAQ list view.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the FAQ list view.
     */
    public function index(): Response|ResponseFactory
    {
        return inertia('FAQ/FAQList', ['faqs' => $this->faqService->getFAQs()]);
    }

    /**
     * Store a newly created FAQ in the database.
     *
     * This action validates the incoming request data for the FAQ,
     * creates a new FAQ record in the database, and redirects to the FAQ list
     * with a success message.
     *
     * @param  FAQRequest  $request  The HTTP request containing FAQ data.
     * @return RedirectResponse A redirect response after storing the FAQ.
     */
    public function store(FAQRequest $request): RedirectResponse
    {
        $this->faqService->storeFAQ($request->validated());

        return to_route('faq.index')->with('success', 'FAQ has been added');
    }

    /**
     * Show the form for creating a new FAQ.
     *
     * This action returns an Inertia response to render the FAQ creation view.
     *
     * @return Response|ResponseFactory An Inertia response instance containing the FAQ creation view.
     */
    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Components/FAQComp/CreateFAQ');
    }

    /**
     * Show the form for editing the specified FAQ.
     *
     * This action retrieves the specified FAQ from the database and returns an Inertia response
     * to render the FAQ edit view.
     *
     * @param  FAQ  $faq  The FAQ instance to be edited.
     * @return Response|ResponseFactory An Inertia response instance containing the FAQ edit view.
     */
    public function edit(FAQ $faq): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());

        return inertia('Components/FAQComp/EditFAQ', ['faq' => $faq]);
    }

    /**
     * Update the specified FAQ in the database.
     *
     * This action validates the incoming request data for the FAQ,
     * updates the specified FAQ record in the database, and redirects to the FAQ list
     * with a success message.
     *
     * @param  FAQRequest  $request  The HTTP request containing updated FAQ data.
     * @param  FAQ  $faq  The FAQ instance to be updated.
     * @return RedirectResponse A redirect response after updating the FAQ.
     */
    public function update(FAQRequest $request, FAQ $faq): RedirectResponse
    {
        $this->faqService->updateFAQ($request->validated(), $faq);

        return to_route('faq.index')->with('success', 'FAQ has been updated');
    }

    /**
     * Remove the specified FAQ from the database.
     *
     * This action deletes the specified FAQ record from the database
     * and redirects to the FAQ list with a success message.
     *
     * @param  FAQ  $faq  The FAQ instance to be deleted.
     * @return RedirectResponse A redirect response after deleting the FAQ.
     */
    public function destroy(FAQ $faq): RedirectResponse
    {
        $this->faqService->destroyFAQ($faq);

        return to_route('faq.index')->with('success', 'FAQ has been deleted');
    }
}
