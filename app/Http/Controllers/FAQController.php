<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

final class FAQController extends Controller
{
    use AuthorizesRequests;

    public function index(): Response
    {
        $faqs = FAQ::all();

        return inertia('FAQ/FAQList', ['faqs' => $faqs]);
    }

    public function store(Request $request): RedirectResponse
    {
        $FAQ = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string|max:255',
        ]);

        FAQ::create($FAQ);

        return to_route('faq.index')->with('success', 'FAQ has been added');
    }

    public function create(): Response
    {
        $this->authorize('admin', Auth::user());

        return inertia('Components/FAQComp/CreateFAQ');
    }

    public function edit(FAQ $faq): Response
    {
        $this->authorize('admin', Auth::user());

        return inertia('Components/FAQComp/EditFAQ', ['faq' => $faq]);
    }

    public function update(Request $request, FAQ $faq): RedirectResponse
    {

        $this->authorize('admin', Auth::user());

        $updateFAQ = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string|max:255',
        ]);

        $faq->update($updateFAQ);

        return to_route('faq.index')->with('success', 'FAQ has been updated');
    }

    public function destroy(FAQ $faq): RedirectResponse
    {
        $faq->delete();

        return to_route('faq.index')->with('success', 'FAQ has been deleted');
    }
}
