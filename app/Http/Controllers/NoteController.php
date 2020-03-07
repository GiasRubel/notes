<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NoteController extends Controller
{
	public function index() {
		return Note::all();
	}

	public function fromLocalStorage(Request $request)
	{
		foreach ($request->all() as $key => $value) {
			Note::create([
				'title' => $value,
			]);
			
		}

		return response()->json(['success' => 'Data Stored']);
	}
} 
