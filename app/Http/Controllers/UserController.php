<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

header('Catche-Control:no-Catch,no-store');



class UserController extends Controller
{
    public function signup_form(Request $req){


        $req->validate([
            'name' => "required|regex:/^[a-zA-Z\s]{3,}$/",
            'email' => "required|regex:/^[a-zA-Z0-9$#!%*&_.\s-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/",
            'phone' => "required|regex:/^[6-9][0-9]{9,9}$/",
            'gender' => "required",
            'address' => "required|regex:/^[a-zA-Z0-9,\/ -]{3,}$/",
            'account_type' => "required",
            'password' => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z0-9!@#$%&*?]{8,16}$/",
            'image' => "nullable|mimes:jpg,jpeg,png,webp,gif|max:4096"
        ]);


        $name = $req->input('name');
        $email = $req->input('email');
        $phone = $req->input('phone');
        $gender = $req->input('gender');
        $address = $req->input('address');
        $account_type = $req->input('account_type');
        $password = Hash::make($req->input('password'));

        $signUpData = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'gender' => $gender,
            'password' => $password,
            'address' => $address,
            'user_type' => $account_type
        ];

        if($req->file('image') && $req->file('image')->isValid()){
           $file = $req->file('image');
        $fileName = time() . "_" . $file->getClientOriginalName();
        $location = "./uploads";
        $file->move($location, $fileName);

        $signUpData['image'] = $location . "/" . $fileName;
        }

       
        DB::table('users')->insert($signUpData);
        return redirect('/index')->with('message',"User Registration Successfully done");

//         try {
//     DB::table('users')->insert($signUpData);
//     return redirect('/index')->with('signup_message', "User Registration Successfully done");
// } catch (\Exception $e) {
//     dd("Insert error: " . $e->getMessage());
// }

    }


    public function signin(Request $req){
       $emailOrPhone = $req->input('emailOrPhone');
       $password = $req->input('password');
       $fetchData = DB::table('users')->where('email',$emailOrPhone)->orWhere('phone',$emailOrPhone)->get()->first();
       
           if(empty($fetchData)){
            return redirect('/index')->with('message','User not exists');
           }
           else{
            $dbPass = $fetchData->password;
              if(Hash::check($password,$dbPass)){
                $userId = $fetchData->user_id;
                $user_Type = $fetchData->user_type;    // New logic add by Sarthak (Buyeer , Seller  & Both) 
                // if User == Buyer Then no Need to Fetech products Entry Data (Product_Catagory_Subcatagory)
                if($user_Type === 'seller' || $user_Type === 'both')
                {
                  $product_cat = DB::table('categories')->get(); // fetching all data for product listing 
                  $product_subcat = DB::table('subcategories')->get(); 
                   
                  $req->session()->put('session_id',$userId);
                  $req->session()->put('session_user_type',$user_Type);
                  // data is too large thats why using session   
                  $req->session()->put('Category',$product_cat);               
                  $req->session()->put('Subcat',$product_subcat); 
//Not Working Cause Data Iss Tooo Large   // return redirect('/index')->with([ 'userInfo' => $fetchData, 'P_Info_1' => $product_cat, 'P_Info_2' => $product_subcat, 'message'  => 'Logged in successfully!!' ]);                  
                  return redirect('/index')->with([ 'userInfo' => $fetchData, 'message'  => 'Logged in successfully!!' ]); 
                }else{
                  return redirect('/index')->with([ 'userInfo' => $fetchData, 'message'  => 'Logged in successfully!!' ]); 
                }
                
              }else{
                return redirect('/index')->with('message','Log in failed!!');
              }
           }
    }


    public function logout(Request $req){
      $req->session()->flush();
      $req->session()->forget('session_id');

      return redirect('/index')->with('message',"Logged Out successfully!");
    }

    public function setting(){
       $sessionId = session()->get('session_id');
          $userInfo = DB::table('users')->where('user_id',$sessionId)->get()->first();
          return view('setting')->with(['userInfo'=>$userInfo]);
    }


     public function nepEdit_data(Request $req){
        $req->validate([
            'name' => "required|regex:/^[a-zA-Z\s]{3,}$/",
            'email' => "required|regex:/^[a-zA-Z0-9$#!%*&_.\s-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/",
            'phone' => "required|regex:/^[6-9][0-9]{9,9}$/"
        ]);
        $userId = $req->input('userId');
        $name = $req->input('name');
        $email = $req->input('email');
        $phone = $req->input('phone');

        $nepEditData = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone
        ];

        DB::table('users')->where('user_id',$userId)->update($nepEditData);
        return redirect('/setting')->with('message',"Account updated Successfully");
      }


      public function pImgEdit_data(Request $req){
        $req->validate([
            'image' => "required|mimes:jpg,png,jpeg,webp,gif|max:4096"
        ]);
        $userId = $req->input('editId');
      $details =  DB::table('users')->where('user_id',$userId)->get()->first();
      $oldImage = $details->image;
      if(!empty($oldImage) && file_exists($oldImage)){
        unlink($oldImage);
      }
        $file = $req->file('image');
        $fileName = time() . "_" . $file->getClientOriginalName();
        $location = "./uploads";
        $file->move($location, $fileName);
        $editedIage = $location . "/" . $fileName;
        $editData = ["image"=>$editedIage];
      
        DB::table('users')->where('user_id',$userId)->update($editData);
        return redirect('/setting')->with('message',"Profile picture updated Successfully");
      }


      public function passEdit_data(Request $req){
         $req->validate([
            'currPass' => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*&?])[A-Za-z0-9!@#$%&*?]{8,16}$/",
            'newPass' => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*&?])[A-Za-z0-9!@#$%&*?]{8,16}$/",
            'conPass' => "required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*&?])[A-Za-z0-9!@#$%&*?]{8,16}$/"
        ]);
        $userId = $req->input('editPassId');
        $details =  DB::table('users')->where('user_id',$userId)->get()->first();
        $dbPass = $details->password;

        $currPass = $req->input('currPass');
        $newPass = $req->input('newPass');
        $conPass = $req->input('conPass');

         
        if(Hash::check($currPass,$dbPass)){
             if(!Hash::check($newPass,$dbPass)){
                 if($newPass === $conPass){
                    DB::table('users')->where('user_id',$userId)->update(['password'=>Hash::make($conPass)]);
                    return redirect('/setting')->with('message',"Password updated Successfully");
                 }else{
                   return redirect('/setting')->with('message',"Request failed!! for New Password and Confirm password not matching!");
                 }
             }else{
              return redirect('/setting')->with('message',"Request failed!! for Old Password and New password are same!");
             }
        }else{
          return redirect('/setting')->with('message'," Request failed!! for Old Password not matching!");
        }

        
      }


      public function addressSetting(){
        $userId = session()->get('session_id');
       $addData = DB::table('users')->where('user_id',$userId)->get()->first();
        return view('address')->with(["allData"=>$addData]);
      }

      public function newAddressAdd(Request $req){
          $userId = $req->input('addressId');
          $newAddress = $req->input('address');
          $addData = DB::table('users')->where('user_id',$userId)->get()->first();
          $address = $addData->allAddresses;
          $addArr = explode(":",$address);
          $addArr[] = $newAddress;

          $addressStr = implode(":",$addArr);
          $addData = DB::table('users')->where('user_id',$userId)->update(["allAddresses"=>$addressStr]);

          $updatedAllData = DB::table('users')->where('user_id',$userId)->get()->first();
          return redirect('/addressSetting')->with('message',"New address added");
      }


      public function allAddressUpdate(Request $req){
          $editAllAddId = $req->input('editAllAddId');
          $addressIndex = $req->input('addressIndex');
          $allAddress = $req->input('allAddress');

           $addData = DB::table('users')->where('user_id',$editAllAddId)->get()->first();
          $address = $addData->allAddresses;
          $addArr = explode(":",$address);
          $addArr[$addressIndex] = $allAddress;

          $newAddressesStr = implode(":",$addArr);
          $addData = DB::table('users')->where('user_id',$editAllAddId)->update(["allAddresses"=>$newAddressesStr]);
          return redirect('/addressSetting')->with('message',"Address updated successfully"); 
      }

      
      public function allAddressDelete($user_id,$addIndex){

        $addData = DB::table('users')->where('user_id',$user_id)->get()->first();
          $address = $addData->allAddresses;
          $addArr = explode(":",$address);
          unset($addArr[$addIndex]);

          $newAddressesStr = implode(":",$addArr);
          $addData = DB::table('users')->where('user_id',$user_id)->update(["allAddresses"=>$newAddressesStr]);
             return redirect('/addressSetting')->with('message',"Address deleted successfully"); 
      }


public function setPrimaryAddress($user_id,$addIndex){

        $addData = DB::table('users')->where('user_id',$user_id)->get()->first();
          $primeAddress = $addData->address;

          $addresses = $addData->allAddresses;
          $addArr = explode(":",$addresses);

           $newPrimeAddress = $addArr[$addIndex];
          $addArr[$addIndex] = $primeAddress;

          $newAllAddressesStr = implode(":",$addArr);

          $updateData = ["address"=>$newPrimeAddress,"allAddresses"=>$newAllAddressesStr];

          $addData = DB::table('users')->where('user_id',$user_id)->update($updateData);
             return redirect('/addressSetting')->with('message',"Primary Address updated successfully"); 
      }



      public function primeAddressUpdate(Request $req){
         $editPrimeAddId = $req->input('editPrimeAddId');
          $primeAddress = $req->input('primeAddress');

          DB::table('users')->where('user_id',$editPrimeAddId)->update(["address"=>$primeAddress]);
          return redirect('/addressSetting')->with('message',"Address updated successfully"); 
      }
}
