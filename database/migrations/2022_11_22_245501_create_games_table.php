<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('team_home_id');
            $table->foreign('team_home_id')->references('id')->on('teams')->onDelete('cascade');
            $table->unsignedBigInteger('team_away_id');
            $table->foreign('team_away_id')->references('id')->on('teams')->onDelete('cascade');
            $table->integer('team_home_goals')->nullable();
            $table->integer('team_away_goals')->nullable();
            $table->timestamp('starting_date');
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
        Schema::dropIfExists('games');
    }
};
