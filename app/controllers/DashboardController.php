<?php

class DashboardController extends Controller {


	public function index()
	{
		return View::make('dashboard.home.index');
	}

}