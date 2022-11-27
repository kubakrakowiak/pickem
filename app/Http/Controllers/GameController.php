<?php

namespace App\Http\Controllers;

use App\Models\Bet;
use App\Models\Game;
use Carbon\Carbon;
use Cassandra\Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index(Request $request)
    {
        $games = Game::all()->load([
            'teamHome',
            'teamAway'
        ]);
        $date = Carbon::now()->format('Y-m-d H:i:s');;

        foreach ($games as $game){
            $starting_date = Carbon::createFromFormat('Y-m-d H:i:s', $game['starting_date'])->format('Y-m-d H:i:s');
            $game['isBetPlaced'] = count(Bet::where('game_id', '=', $game['id'])->where('user_id', '=', Auth::user()['id'])->get()) > 0;
            if ($game['isBetPlaced']){
                $game['bet'] = Bet::where('game_id', '=', $game['id'])->where('user_id', '=', Auth::user()['id'])->first();
            }
            $game['started'] = $starting_date < $date;
        }

        return Inertia::render('Game/Index', [
            'games' => $games,
        ]);
    }
}
