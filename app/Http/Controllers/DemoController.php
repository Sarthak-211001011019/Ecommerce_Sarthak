<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class DemoController extends Controller
{
    public function index(){
        return view('index');
    }

    public function wishlist(){
        return view('wishlist');
    }
}
