<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team_id')->nullable()->constrained('teams')->cascadeOnDelete();
            $table->string('type');
            $table->string('title');
            $table->longText('description');
            $table->date('date');
            $table->time('time');
            $table->string('address');
            $table->string('post_code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
