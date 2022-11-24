<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Group/Index', [
            'groups' => Group::all(),
        ]);
    }
}
