<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Game/Index', [
            'games' => Game::all()->load([
                'teamHome',
                'teamAway'
            ]),
        ]);
    }
}
