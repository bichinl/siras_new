(function($) {

    $.fn.samCalendar = function(options) {

        var settings = $.extend({
            background: 'black'
        }, options);

        return this.each(function() {
            var obj = $(this);

            /* FECHAS */
            var today = new Date();
            
            var currentMonth = today.getMonth();
            var currentYear = today.getFullYear();

            
			$(obj).append('<div id="samCalendarWidget" style="padding:10px 20px; margin-top: 20px; color: white; background:'+settings.background+'"></div>');
			tmp_html='<h3 class="text-center"><a href="#" class="movePrev" style="color: white; margin-right:20px"><i class="fa fa-arrow-circle-o-left"></i></a><i class="fa fa-calendar"></i> <span class="fecha">'+nombreMes(currentMonth)+' '+currentYear+'</span><a href="#" class="moveNext" style="color: white; margin-left:20px"><i class="fa fa-arrow-circle-o-right"></i></a></h3><hr>';
            $('#samCalendarWidget',obj).append(tmp_html);
            
            $('#samCalendarWidget',obj).append('<table style="width:100%"></table>');

            tmp_html='<thead><tr><th class="text-center" width="14%">DO</th><th class="text-center" width="14%">LU</th><th class="text-center" width="14%">MA</th><th class="text-center" width="14%">MI</th><th class="text-center" width="14%">JU</th><th class="text-center" width="14%">VI</th><th class="text-center" width="14%">SA</th></tr></thead>';
            $('#samCalendarWidget table',obj).append(tmp_html);

            $('#samCalendarWidget table',obj).append('<tbody></tbody>');

            

			createCalendar();

            function createCalendar(){

            	$('#samCalendarWidget table tbody',obj).empty();

 				var now = new Date();
				var lastDayOfTheMonth = new Date(1900+now.getYear(), now.getMonth()+1, 0);

				var posDay = new Date(currentYear,currentMonth, 1).getDay();
				var lastOfMonth = new Date(currentYear,currentMonth+1, 0).getDate();

				console.log(posDay+' - '+lastOfMonth);

				var diasPorCargar = lastOfMonth;

				var tmp_html = null;

				var count=0;
				var calendarPos=0;
				var elDia=1;
				while(diasPorCargar > 0){
					if(count==0){
						tmp_html+='<tr>';
					}
					
					if (calendarPos < posDay){
						tmp_html+='<td class="text-center"></td>';
						calendarPos++;
					}else{
						tmp_html+='<td class="text-center">'+elDia+'</td>';
						elDia++;
						diasPorCargar--;
					}

					count++;
					if(count==7){
						tmp_html+='</tr>';
						count=0;
					}

				}

				$('#samCalendarWidget table tbody',obj).append(tmp_html);

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

				$('span.fecha',obj).text(nombreMes(currentMonth)+' '+currentYear);
				createCalendar();				
			});

			$('.movePrev',obj).on('click',function(event){
				event.preventDefault();
				
				if(currentMonth > 0){
					currentMonth--;
				}else{
					currentMonth=0;
					currentYear--;
				}
				
				$('span.fecha',obj).text(nombreMes(currentMonth)+' '+currentYear);
				createCalendar();				
			});

        });

    }

})(jQuery);