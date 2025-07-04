<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\DemoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProducatController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});

// SSSSSSSSSSSSSSSSSS USER SECTION SSSSSSSSSSSSSSSSSSSS

Route::get('/index',[DemoController::class,'index']);
Route::get('/wishlist',[DemoController::class,'wishlist']);

Route::post('/signup',[UserController::class,'signup_form']);

Route::post('/signin',[UserController::class,'signin']);
Route::get('/logout',[UserController::class,'logout']);

Route::get('/setting',[UserController::class,'setting']);

Route::post('/nepEdit',[UserController::class,'nepEdit_data']);
Route::post('/pImgEdit',[UserController::class,'pImgEdit_data']);
Route::post('/passEdit',[UserController::class,'passEdit_data']);

Route::get('/addressSetting',[UserController::class,'addressSetting']);

Route::post('/newAddressAdd',[UserController::class,'newAddressAdd']);


Route::post('/primeAddressUpdate',[UserController::class,'primeAddressUpdate']);

Route::post('/allAddressUpdate',[UserController::class,'allAddressUpdate']);

Route::get('/allAddressDelete{user_id}{addIndex}',[UserController::class,'allAddressDelete']);

Route::get('/setPrimaryAddress{user_id}{addIndex}',[UserController::class,'setPrimaryAddress']);


// SSSSSSSSSSSSSSSSSS PRODUCT SECTION SSSSSSSSSSSSSSSSSSSS

Route::post('/Product_Listing_Rout',[ProducatController::class,'Listing_Product']);   // need to Fx typo for "ProductController" 
Route::get('/Listed_Product{S_id}',[ProducatController::class,'ViewListed_Product']); 




// SSSSSSSSSSSSSSSSSSSSSS   Signin For Admin/User   SSSSSSSSSSSSSSSSSSS
Route::get('/Admin_signup',[AdminController::class,'Signup_Page']);
Route::get('/signin_rout',[AdminController::class,'Signin_Page']);


