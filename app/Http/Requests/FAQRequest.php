<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Auth\Access\Response;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

final class FAQRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * This method checks if the user has the 'admin' permission
     */
    public function authorize(): Response
    {
        return Gate::authorize('admin', Auth::user());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string', 'max:255'],
        ];
    }
}
