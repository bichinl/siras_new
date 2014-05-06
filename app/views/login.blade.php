<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Bootstrap 101 Template</title>
		<!-- Bootstrap -->
		{{HTML::style('assets/css/vendors/bootstrap.min.css') }}
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
		
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

		{{HTML::style('assets/css/login.css') }}
	</head>
	<body>
					
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2">
					{{ Form::open(array('url'=>'/', 'role'=>'form')) }}
					<div style="margin-bottom: 20px;">
						<center>
							<img class="img-responsive" src="{{ asset('assets/img/siras_logo_2.png') }}">
						</center>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-4">
							<div class="hidden-lg hidden-md" style="height:30px; display:block"></div>
							<div class="input-group">
								{{ Form::email('email', Input::old('emal'), array('class'=>'form-control', 'placeholder'=>'email@ejemplo.com')) }}
								<span class="input-group-addon"><i class="fa fa-user"></i></span>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 text-center visible-lg visible-md">
							<i class="fa fa-ellipsis-h"></i></li>
							<img src="{{ asset('assets/img/escudo.png') }}" alt="" class="img-circle">
							<i class="fa fa-ellipsis-h"></i></li>
						</div>
						<div class="col-lg-4 col-md-4">
							<div class="hidden-lg hidden-md" style="height:30px; display:block"></div>
							<div id="input_pass" class="input-group">
								{{ Form::password('password', array('class'=>'form-control', 'placeholder'=>'Su constraseña')) }}
								<span class="input-group-addon"><i class="fa fa-key"></i></span>
							</div>
						</div>
						<div class="text-center hidden-lg hidden-md" style="margin-top: 20px;">
							<img src="{{ asset('assets/img/escudo.png') }}" alt="" class="img-circle">
						</div>
					</div>
					<div class="row" style="margin-top: 20px;">
						<div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4">
							<button type="submit" class="btn btn-primary btn-lg btn-block"><i class="fa fa-unlock"></i> Entrar</button>
						</div>
					</div>
					{{ Form::close() }}
				</div>
			</div>
		</div>


		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		{{ HTML::script('assets/js/vendors/bootstrap.min.js') }}

		<script type="text/javascript">
			
			onWindoResize();

			$(window).resize(function(){
				onWindoResize();
			});

			function onWindoResize(){
				var h = $(window).height();

				var imgH = $('.img-circle').height();

				$('.input-group').css('margin-top',(imgH/2)-20);

				var contH = $('.container').height();
				$('.container').css('margin-top',(h/2)-(contH/2));
			}
		</script>

	</body>
</html>