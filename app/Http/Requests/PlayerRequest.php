<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

final class PlayerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        $user = $this->user();
        if (! $user) {
            return false;
        }

        if ($this->isMethod('POST')) {
            return true;
        }

        if (in_array($this->method(), ['PUT', 'PATCH'], true)) {
            $player = $this->route('player');
            if (! $player) {
                return false;
            }
            if (is_null($player->user_id)) {
                return $user->is_admin;
            }

            return $user->is_admin || $player->user_id === $user->id;
        }

        // block everything else
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'team_id' => ['required', 'integer', 'exists:teams,id'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'date_of_birth' => ['required', 'date', 'before:today'],
            'address' => ['required', 'string', 'max:500'],
            'post_code' => ['required', 'string', 'max:255'],
        ];
    }
}
