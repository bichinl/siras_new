@extends('layouts.master')

@section('styles')
	{{ HTML::style('assets/css/vendors/jquery.circliful.css') }}
	{{ HTML::style('assets/css/samCalendar.css') }}
@stop

@section('main-content')
	<ol class="breadcrumb">
		SIRAS
		<li class="active"><i class="fa fa-home"></i> Home</li>
	</ol>
	
	<div class="container" style="width:100%">
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
				<div class="well">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
							<div class="chart" data-percent="55" data-scale-color="#f1f1f1" data-bar-Color="#6caa25">
								<span class="percent">55 %</span>
							</div>
						</div>
						<div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
							<p><strong>Mes anterior</strong></p>
							<p>Num de apoyos en el mes</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
				<div class="well">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
							<img src="{{ asset('assets/img/icono_apoyo_familias.png') }}" class="animate-fade-in">
						</div>
						<div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
							<p><strong>$890,000</strong></p>
							<p>Total en apoyos a familias</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
				<div class="well">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
							<img src="{{ asset('assets/img/icono_total_familias.png') }}" class="animate-fade-in">
						</div>
						<div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
							<p><strong>300</strong></p>
							<p>Familias beneficiadas</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
				<div class="well">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
							<span class="fa-stack fa-2x animate-fade-in">
								<i class="fa fa-circle fa-stack-2x" style="color:#0086c6"></i>
								<i class="fa fa-bar-chart-o fa-stack-1x fa-inverse"></i>
							</span>
						</div>
						<div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
							<p><strong>50</strong></p>
							<p>Tipos de apoyos existentes</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
				
				<div id="googlemaps"></div>
				
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<!-- WEATHER WIDGET -->
				<div id="weatherBig"></div>

				<!-- CALENDAR WIDGET -->
				<div id="samcalendar"></div>
				
								

			</div>
		</div>

	</div>
@stop

<!-- <div class="row">
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
						<div class="chart" data-percent="68" data-scale-color="#f1f1f1" data-bar-Color="#820000">
							<span class="percent">68 %</span>
						</div>
					</div>
					<div class="col-lg-9 col-md-9 col-sm-9 col-xs-6">
						<p>Mes anterior</p>
						<p>Num de apoyos en el mes</p>
					</div>
				</div> -->

@section('scripts')
	<!-- CHARTS PLUGIN -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.4/jquery.easypiechart.min.js"></script>

	<!-- WEATHER PLUGIN -->
	{{ HTML::script('assets/js/jquery.samWeather.js') }}

	<!-- Google maps api -->
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>

	{{ HTML::script('assets/js/jquery.samGoogleAPI.js') }}
	{{ HTML::script('assets/js/jquery.samCalendar.js') }}
	<script type="text/javascript">
		$('#googlemaps').samGoogleAPI();
	    $('#samcalendar').samCalendar({
	    	background: '#39464a'
	    });
	</script>
@stop