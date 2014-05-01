<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>SIRAS</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        {{ HTML::style("assets/css/bootstrap.min.css") }}
       
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	
		@yield('styles')

        {{ HTML::style("assets/css/style.css") }}

        {{ HTML::script("assets/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js") }}
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
		
		<div id="loader-screen"></div>

		<div id="header-bar">
			<!-- <div>
				<div class="pull-right">
					<a href="#"><i class="fa fa-power-off fa-4x"></i> </a>
				</div>
			</div> -->

			<div class="clearfix">
				<div class="" style="float:left">
					<img src="{{ URL::to('assets/img/dif_zapotlan_small.png') }}">
				</div>
				<div class="" style="float:right">
					<a href="#"><i class="fa fa-power-off fa-3x"></i> </a>
				</div>
			</div>

		</div>

		<div id="wrapper">

			<div id="sidebar-wrapper">
				<a href="#" class="user-bnt">
					<div class="clearfix">
						<div style="float:left; margin-right: 10px;">
							<img class="img-responsive img-circle" src="http://bootstrapguru.com/preview/delighted/images/avatar.png">
						</div>
						<div style="float:left">
							<p class="small no-margins">Bienvenido</p>
							<p class="no-margins"><strong>Username</strong></p>
						</div>
					</div>
				</a>

				<ul class="list-unstyled">
					<li class="active">
						<a href="#">
							<i class="fa fa-home"></i> Home
						</a>
					</li>
					<li><a href=""><i class="fa fa-check"></i> Apoyos</a></li>
					<li><a href=""><i class="fa fa-heart"></i> Dependencias</a></li>
					<li><a href=""><i class="fa fa-user"></i> Tipo de apoyos</a></li>
					<li><a href=""><i class="fa fa-gears"></i> Sistema</a></li>
				</ul>
			</div>

			<div id="page-content-wrapper">
				<div class="page-content">
					
					@yield('main-content')
					
				</div>
			</div>

		</div>
		

    	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

        <script>
        	window.jQuery || document.write('<script src="{{ URL::to("assets/js/vendor/jquery-1.11.0.min.js") }}"><\/script>');
        </script>

        <script src="//cdnjs.cloudflare.com/ajax/libs/spin.js/2.0.0/spin.min.js"></script>

        {{ HTML::script("bower_components/bootstrap/dist/js/bootstrap.min.css") }}
		
		@yield('scripts')

        {{ HTML::script("assets/js/main.js") }}

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
