<?php



/*Route::get('/', function()
{
	return View::make('dashboard.home');
});*/

Route::get('/',function(){
	return View::make('login');
});

Route::post('/',function(){
	return Redirect::to('/cms');
});

Route::get('/cms','DashboardController@index');