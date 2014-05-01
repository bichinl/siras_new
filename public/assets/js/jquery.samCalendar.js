(function($) {

    $.fn.samCalendar = function(options) {

        var settings = $.extend({
            background: 'black'
        }, options);

        return this.each(function() {
            var obj = $(this);

			
            /* FECHAS */
            var today = new Date();
            
            var currentMonth = today.getMonth()+2;
            var currentYear = today.getFullYear();

            var posDay = new Date(currentYear,currentMonth, 1).getDay();
			var lastOfMonth = new Date(currentYear,currentMonth+1, 0).getDate();

			$(obj).append('<div id="samCalendarWidget" style="padding:10px 20px; margin-top: 20px; color: white; background:'+settings.background+'"></div>');
			tmp_html='<h3 class="text-center"><a href="#" class="movePrev" style="color: white; margin-right:20px"><i class="fa fa-arrow-circle-o-left"></i></a><i class="fa fa-calendar"></i> <span class="fecha">'+nombreMes(currentMonth)+' '+currentYear+'</span><a href="#" class="moveNext" style="color: white; margin-left:20px"><i class="fa fa-arrow-circle-o-right"></i></a></h3><hr>';
            $('#samCalendarWidget',obj).append(tmp_html);
            
            $('#samCalendarWidget',obj).append('<table style="width:100%"></table>');

            tmp_html='<thead><tr><th class="text-center" width="14%">LU</th><th class="text-center" width="14%">MA</th><th class="text-center" width="14%">MI</th><th class="text-center" width="14%">JU</th><th class="text-center" width="14%">VI</th><th class="text-center" width="14%">SA</th><th class="text-center" width="14%">DO</th></tr></thead>';
            $('#samCalendarWidget table',obj).append(tmp_html);

            $('#samCalendarWidget table',obj).append('<tbody></tbody>');

            

			createCalendar(posDay,lastOfMonth);

            function createCalendar(posDay,lastOfMonth){
 				var now = new Date();
				var lastDayOfTheMonth = new Date(1900+now.getYear(), now.getMonth()+1, 0);

				console.log(posDay+' - '+lastOfMonth);
	        }

	

            function nombreMes(mes){
                var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                ];
                return monthNames[mes];
			}

			$('table tbody a',obj).on('click', function(event){
				event.preventDefault();
				
			});

			/* ARROWS */
			$('.moveNext',obj).on('click',function(event){
				event.preventDefault();
				
				if(currentMonth < 11){
					currentMonth++;
				}else{
					currentMonth=0;
					currentYear++;
				}
				
				var firstOfMonth = new Date(currentYear,currentMonth, 1);
				var lastOfMonth = new Date(currentYear,currentMonth+1, 0);

				$('span.fecha',obj).text(fecha(currentMonth,currentYear));
				createCalendar(firstOfMonth,lastOfMonth);				
			});

			$('.movePrev',obj).on('click',function(event){
				event.preventDefault();
				
				if(currentMonth > 0){
					currentMonth--;
				}else{
					currentMonth=0;
					currentYear--;
				}
				
				var firstOfMonth = new Date(currentYear,currentMonth, 1);
				var lastOfMonth = new Date(currentYear,currentMonth+1, 0);

				$('span.fecha',obj).text(fecha(currentMonth,currentYear));
				createCalendar(firstOfMonth,lastOfMonth);				
			});

        });

    }

})(jQuery);