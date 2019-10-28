<?php

use Illuminate\Http\Request;

Route::group([
    'prefix' => 'v1',
    'as' => 'api.',
    'namespace' => 'Api\V1'
], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    
    Route::group(['middleware' => ['auth:api']], function() {
        Route::get('/user', function (Request $request) {
            return $request->user();
        })->name('user');
    });
});
