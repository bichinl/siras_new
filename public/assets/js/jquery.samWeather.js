(function($){
	
	$.fn.samWeather = function(options){
		
		var settings = $.extend({
			// tipo: 'small'
		}, options);

		return this.each(function() {
			var obj = $(this);

			var url = 'http://query.yahooapis.com/v1/public/yql?';
			var ciudad='116552'; //'24552657';
			var unidad='c';
				
			$.getJSON(url, {
				q:'select * from weather.forecast where woeid='+ciudad+' and u="'+unidad+'"',
				format: 'json',
				nojsoncallback: '1'
			}).success(function(data) {
				// console.log('Success');
				// console.log(data);
				// console.log(data.query.results.channel.item);
				
				var icon = data.query.results.channel.item.condition.code;
				var grados = data.query.results.channel.item.condition.temp;
				var forecast_min = data.query.results.channel.item.forecast[0].low;
				var forecast_max = data.query.results.channel.item.forecast[0].high;
				var the_location =  data.query.results.channel.location.city+', '+data.query.results.channel.location.region;
				
				compuesto(icon,grados,forecast_min,forecast_max,the_location);

			}).fail(function(data) {
				console.log('Fail');
			});

			function compuesto(icon,grados,min,max,the_location){
				$(obj).append('<div class="samWeather text-center" style="margin:0 auto; padding:10px"></div>');
				
				$('> .samWeather',obj).append('<p class="lead">'+the_location+'</p>');
				$('> .samWeather',obj).append('<p>'+fecha()+'</p>');
				/*$('> .samWeather',obj).append('<div class="wbig" style="position:relative; margin-top:-10px"><img class="img-responsive" src="http://l.yimg.com/a/i/us/nws/weather/gr/'+icon+'d.png" /></div>');
				$('> .samWeather > .wbig',obj).append('<p class="lead" style="position:absolute; top:0; left:60%;">'+grados+'&deg;</p>');
				$('> .samWeather > .wbig',obj).append('<p style="margin-top:-50px">Max: '+max+'&deg; / Min: '+min+'&deg;</p>');*/


				// $('> .samWeather',obj).append('<div class="text-center"><img src="http://l.yimg.com/a/i/us/nws/weather/gr/'+icon+'d.png" style="width:auto; height:auto;vertical-align: middle;"/><span class="wbig">'+grados+'&deg;</span></div>');
				$('> .samWeather',obj).append('<div class="text-center"><img src="assets/img/weather_flat_white/svg/'+icon+'.svg" style="width:auto; height:auto;vertical-align: top; margin-right: 10%"/><span class="wbig">'+grados+'&deg;</span></div>');
				$('> .samWeather',obj).append('<p>Max: '+max+'&deg; / Min: '+min+'&deg;</p>');
				$('> .samWeather',obj).append('<p class="small text-muted">Powered by &copy; SourCode Web Creative</p>');
			}

			function fecha(){
                var monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
                    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
                ];
                var dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

                var newDate = new Date();
                newDate.setDate(newDate.getDate() + 0);
                return dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear();
			}



		});

	}; /* FIN DEL PLUGIN */

})(jQuery);