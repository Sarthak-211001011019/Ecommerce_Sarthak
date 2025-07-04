<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;  // for server side validation 

class ProducatController extends Controller
{
    // New Product Listing
    public function Listing_Product(Request $req){
         $product_Valid = Validator::make($req->all(),[
            'Seller_ID'       => 'required|numeric|exists:users,user_id',
            'P_Name'          => 'required|string|max:255',
            'P_Desc'          => 'required|string',
            'P_Price'         => 'required|numeric|min:50.00',
            'P_Qty'           => 'required|integer|min:10',
            'P_Category'     => 'required|exists:categories,category_id',
            'P_SubCategory'   => 'required|exists:subcategories,subCategory_id',
            'P_Image'         => 'required|file|mimes:jpeg,jpg,png,webp|max:4096', // Kb
         ]);  
         if ($product_Valid->fails()) 
         {
        return redirect()->back()
                         ->withErrors($product_Valid)
                         ->withInput();
        }  
        $Seller_id = $req->input('Seller_ID');
        $Product_name = $req->input('P_Name');
        $Product_desc = $req->input('P_Desc');
        $Product_price = $req->input('P_Price');
        $Product_qty = $req->input('P_Qty');
        $Product_cat = $req->input('P_Category');
        $Product_subcat = $req->input('P_SubCategory');
        //ForImageInput
        $Product_file = $req->file('P_Image');
        $P_file_name = time().'_'.$Product_file->getClientOriginalName();
        $P_upload_path = './uploads';
        $Product_file->move($P_file_name, $P_upload_path);
        //Data Prepare For Database  
        $Data_Insert = [  'seller_id' => $Seller_id,
                          'product_name' => $Product_name,
                          'product_desc' => $Product_desc,
                          'product_price' => $Product_price,
                          'product_qty' => $Product_qty,
                          'product_qty' => $Product_qty,
                          'category_id' => $Product_cat,
                          'subcategory_id' => $Product_subcat, 
                          'product_image' => $P_upload_path.'/'.$P_file_name 
                       ]; 

        $product_List = DB::table('products')->insert($Data_Insert);
        if($product_List){
            // return response()->json(['message'=>'Product Listed !']);
            return redirect('/index')->with('message','Product Listing Sucess !');
        }else{
            return redirect('/index')->with('message','Product Listing Failed !');
            // return response()->json(['message'=>'Product Not Inserted !']);
        }
    }
    
}
