<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactInfoRequest;
use App\Models\ContactInfo;
use App\Services\ContactInfoService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ContactInfoController extends Controller
{
    use AuthorizesRequests;

    public function __construct(private readonly ContactInfoService $service)
    {
    }

    public function create(): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());
        return inertia('ContactInfo/Create');
    }

    public function store(ContactInfoRequest $request): RedirectResponse
    {
        $this->authorize('admin', Auth::user());
        $this->service->store($request->validated());
        return to_route('home')->with('success', 'Contact info created');
    }

    public function edit(ContactInfo $contactInfo): Response|ResponseFactory
    {
        $this->authorize('admin', Auth::user());
        return inertia('ContactInfo/Edit', [
            'contact' => $contactInfo,
        ]);
    }

    public function update(ContactInfoRequest $request, ContactInfo $contactInfo): RedirectResponse
    {
        $this->authorize('admin', Auth::user());
        $this->service->update($contactInfo, $request->validated());
        return to_route('home')->with('success', 'Contact info updated');
    }

    public function destroy(ContactInfo $contactInfo): RedirectResponse
    {
        $this->authorize('admin', Auth::user());
        $this->service->destroy($contactInfo);
        return to_route('home')->with('success', 'Contact info deleted');
    }

    public function getContactInfo(): JsonResponse
    {
        $contact = $this->service->getFirst();
        return response()->json($contact);
    }
}


