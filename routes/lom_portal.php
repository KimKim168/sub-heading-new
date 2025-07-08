<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function(){
    return Inertia::render('lomPortal/home/Index');
});
Route::get('/user/login', function(){
    return Inertia::render('lomPortal/login/Index');
});
