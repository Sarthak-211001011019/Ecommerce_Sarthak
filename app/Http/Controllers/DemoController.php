<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DemoController extends Controller
{
    public function index(){
        $sessionId = session()->get('session_id');
        if(isset($sessionId)){
          $userInfo = DB::table('users')->where('user_id',$sessionId)->get()->first();
          return view('index')->with(['userInfo'=>$userInfo]);
        }else{
           return view('index');
        }
        
    }


    public function wishlist(){
        return view('wishlist');
    }
}
