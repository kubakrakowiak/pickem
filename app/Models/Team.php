<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    public function games()
    {
        return Game::where('team_home_id', '=', $this->id)->orWhere('team_away_id', '=', $this->id);
    }
}
