<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class FAQController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $faqs = FAQ::all();

        return inertia("FAQ/FAQList", ['faqs' => $faqs]);
    }
}
