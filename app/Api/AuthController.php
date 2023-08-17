<?php

namespace App\Api;

use App\Api\ResponseController;
use App\Enums\eRespCode;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Requests\auth\RegisterRequest;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Throwable;

class AuthController extends ResponseController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(RegisterRequest $request)
    {
      
        try {
            DB::beginTransaction();
            $customer = Customer::create();
            $user = User::create($request->validated() + [
                'name' => $request->firstname.' '.$request->lastname,
                'userable_id' => $customer->id,
                'userable_type' => Customer::class,
            ]);
            DB::commit();
            return $this->resp->ok(eRespCode::_200_OK, $user);
        } catch (Throwable $th) {
            DB::rollBack();
            info($th);
            return $this->resp->internal_error($th->getMessage());
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return $this->resp->unauthorized(eRespCode::_403_NOT_AUTHORIZED, ['error' => 'Unauthorized']);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return $this->resp->ok(eRespCode::_200_OK, auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();

        return $this->resp->ok(eRespCode::_200_OK, ['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return $this->resp->ok(eRespCode::_200_OK, [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }
}
