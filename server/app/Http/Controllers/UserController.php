<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use \Illuminate\Http\Response;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OTPVerification;
use Validator;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function register (Request $request) {
        $input = $request->all();

        $validation = Validator::make($input, [
            'role' => "required",
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'gender' => 'required',
            'password' => 'required'
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }

        $user = User::create([
            "role" => $request->role,
            "nickname" => $request->nickname,
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "gender" => $request->gender,
            "password" => bcrypt($request->password),
            "address" => $request->address
        ]);

        if($user) {

            $otp = mt_rand(1111,9999);

            $user->otp = $otp;
            $user->save();

            Mail::to($user)->send(new OTPVerification($user->name, $otp));

            return response(["user" => $user, 'registered' => true]);
        }
        else {
            return response(["user" => null, 'registered' => false], 500);
        }
    }

    public function verify (Request $request) {
        $otp = $request->otp;
        $email = $request->email;

        if($otp) {
            $user = User::where("email", $email)->first();
            
            if($user && ($user->otp == $otp)) {
                $user->otp = "";
                $user->verified = true;
                $user->save();

                return response(["user" => $user, 'verified' => true]);
            }
            else {
                return response(["user" => null, "verified" => false]);
            }
        }
        else {
            return response(["user" => null, "verified" => false]);
        }
    }

    public function login (Request $request) {
        $input = $request->all();

        $validation = Validator::make($input, [
            'phone' => 'required',
            'password' => 'required'
        ]);

        if($validation->fails()) {
            return response()->json(['errors' => $validation->errors()->all()], 400);
        }

        if(Auth::attempt(["phone" => $input['phone'], "password" => $input['password']])) {
            $user = Auth::user();

            if(!$user->verified) {
                return response(["user" => $user, 'error' => "You are not authenticated"], 401);
            }

            $token = $user->createToken('trimmeapp');

            return response(["user" => $user, 'token' => $token->plainTextToken, "error" => false]);
        }else {
            return response(["user" => null, 'token' => null, "error" => "Invalid username or password"]);
        }
    }
}
