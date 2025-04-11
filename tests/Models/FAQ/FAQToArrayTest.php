<?php

use App\Models\FAQ;

test('to array', function () {
    $faq = FAQ::factory()->create();

    expect(array_keys($faq->toArray()))->toBe([
        'question',
        'answer',
        'updated_at',
        'created_at',
        'id',
    ]);
});
