<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{queryString?}', 'HomeController@index')->where('queryString', '(.*)')->name('api-Home');

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

