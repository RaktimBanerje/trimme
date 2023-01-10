<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string("image")->nullable();
            $table->string("name");
            $table->string("address");
            $table->string("latitude");
            $table->string("longitude");
            $table->boolean("is_approve")->default(true);
            $table->boolean("is_active")->default(true);
            $table->boolean("is_open")->default(false);
            $table->time("open_at")->nullable();
            $table->time("close_at")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
}
