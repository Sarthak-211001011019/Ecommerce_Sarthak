<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DemoController extends Controller
{
    public function index(){
        
          $productInfo = DB::table('products')
                                            ->join('categories', 'products.category_id', '=', 'categories.category_id')
                                            ->join('subcategories', 'products.subCategory_id', '=', 'subcategories.subCategory_id')
                                            ->join('users', 'products.seller_id', '=', 'users.user_id')
                                            ->get();

        $sessionId = session()->get('session_id');
        if(isset($sessionId)){
            $userInfo = DB::table('users')->where('user_id',$sessionId)->get()->first();

          return view('index')->with(['userInfo'=>$userInfo,'productInfo'=>$productInfo]);

        }else{

           return view('index')->with(['productInfo'=>$productInfo]);
        }
        
    }

    public function wishlist(){
        return view('wishlist');
    }
}
