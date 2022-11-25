<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bet extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_home_goals',
        'team_away_goals',
        'game_id',
        'user_id',
    ];

    public function user(){
        return $this->hasOne(User::class, 'user_id');
    }

    public function game(){
        return $this->belongsTo(Game::class);
    }
}
