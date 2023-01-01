<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ShopController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post("/user/register", [UserController::class, 'register']);
Route::post("/user/verify", [UserController::class, 'verify']);
Route::post("/user/login", [UserController::class, 'login']);
Route::post("/user/isLogin", [UserController::class, 'isLogin']);

Route::group([
    'middleware'    =>  'auth:sanctum',
    'prefix'        =>  'user',
    'name'          =>  'user.'
], function () {
    

    Route::get("/{role?}", [UserController::class, 'index']);
    Route::get("/is-authenticate", [UserController::class, 'isAuthenticate'])->name("isAuthenticate");
});


Route::resource('shop', ShopController::class)->middleware("auth:sanctum");

// Route::group([
//     'middleware'    =>  'auth:sanctum',
//     'prefix'        =>  'shop',
//     'name'          =>  'shop.'
// ], function () {
    
//     Route::resource('photos', PhotoController::class)
    
// });


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::group([
//     "name" => "user.",
//     "mi"
// ], function() {

// })