<?php
namespace App\Http\Controllers\Api\V1;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:4'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:8'],
        ]);
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->api_token = Str::random(60);
        $user->save();
        return $user;
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
        ]);
        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)) {
            return response()->json(Auth::user());
        } else {
            return response()->json(['errors' => ['message'=>['invalid credentials']]], 401);
        }
    }
}