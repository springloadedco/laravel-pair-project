<?php

use App\Http\Controllers\ShowFormController;
use App\Http\Controllers\SubmitFormController;
use Illuminate\Support\Facades\Route;

Route::get('/', ShowFormController::class);
Route::post('/submit', SubmitFormController::class);
