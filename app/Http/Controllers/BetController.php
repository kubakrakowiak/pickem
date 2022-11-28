<?php

namespace App\Http\Controllers;

use App\Models\Bet;
use App\Models\Game;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BetController extends Controller
{

    /**
     * Update the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function set(Request $request): JsonResponse
    {
        $game = Game::find($request->input('game_id'));
        $user_id = Auth::user()['id'];
        $isBetPlaced = Bet::where('game_id', '=', $game['id'])->where('user_id', '=', $user_id)->get();
        $date = Carbon::now()->format('Y-m-d H:i:s');;
        $starting_date = Carbon::createFromFormat('Y-m-d H:i:s', $game['starting_date'])->format('Y-m-d H:i:s');
        if (count($isBetPlaced) <= 0 &&
            $starting_date > $date &&
            $request->input('team_home_score') >= 0 &&
            $request->input('team_away_score') >= 0)
        {
            $bet = Bet::create([
                'team_home_goals' => $request->input('team_home_score'),
                'team_away_goals' => $request->input('team_away_score'),
                'game_id' => $game['id'],
                'user_id' => $user_id
            ]);
            return response()->json($bet, 200);
        }
        return response()->json('Error', 500);
    }

    public function leaderboard(Request $request)
    {
        $users = User::all();
        foreach ($users as $user){
            $counter = 0;
            foreach ($user->bets as $bet){
                if ($bet['team_home_goals'] === $bet->game['team_home_goals'] && $bet['team_away_goals'] === $bet->game['team_away_goals']){
                    $counter++;
                }
            }
            $user['score'] = $counter;
        }
        $sortedUsers = $users->sortByDesc('score');
        $pos = 1;
        $resultLeaderboard = [];
        foreach ($sortedUsers as $sortedUser){
            $sortedUser['rank'] = $pos;
            $resultLeaderboard[$pos] = $sortedUser;
            $pos++;
        }


        return Inertia::render('Leaderboard/Index', [
            'users' => $resultLeaderboard,
        ]);
    }
}
