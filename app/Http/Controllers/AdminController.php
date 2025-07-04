<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;



class AdminController extends Controller
{
    //
    public function Signup_Page(){
        return view('Signup');
    }

    public function Signin_Page(){
        return view('Signin');
    }
}
