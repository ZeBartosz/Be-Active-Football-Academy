<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
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

    public function store(Request $request)
    {
        $FAQ = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string|max:255',
        ]);

        FAQ::create($FAQ);

        return redirect()->action([self::class, 'index'])->with('success', 'FAQ created successfully.');
    }

    public function create(): Response
    {
        $this->authorize('admin', Auth::user());

        return inertia('Components/FAQComp/CreateFAQ');
    }
}
