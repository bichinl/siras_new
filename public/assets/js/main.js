	var opts = {
	    lines: 13, // The number of lines to draw
	    length: 20, // The length of each line
	    width: 10, // The line thickness
	    radius: 30, // The radius of the inner circle
	    corners: 1, // Corner roundness (0..1)
	    rotate: 0, // The rotation offset
	    direction: 1, // 1: clockwise, -1: counterclockwise
	    color: '#fff', // #rgb or #rrggbb or array of colors
	    speed: 1, // Rounds per second
	    trail: 60, // Afterglow percentage
	    shadow: false, // Whether to render a shadow
	    hwaccel: false, // Whether to use hardware acceleration
	    className: 'spinner', // The CSS class to assign to the spinner
	    zIndex: 2e9, // The z-index (defaults to 2000000000)
	    top: '50%', // Top position relative to parent
	    left: '50%' // Left position relative to parent
	};
	var target = document.getElementById('loader-screen');
	var spinner = new Spinner(opts).spin(target);

	$(document).ready(function() {
	    $('#loader-screen').remove();
	    animate_fade_in();
	});

	function animate_fade_in() {
	    $('.animate-fade-in').each(function() {
	        $(this).animate({
	            opacity: 1
	        }, 2500, function() {
	            $(this).removeClass('animate-fade-in');
	        });
	    });
	}

	// var h = $(document).height();
	// $('#sidebar').css('height', h);
	// $('#main-content').css('height', h);


	/***********************************************
	 *
	 *	CIRCLIFUL PLUGINS
	 *
	 ************************************************/
	$('.chart').easyPieChart({
	    //your options goes here
	   size:56,
	   //barColor: '#ff00FF'
	   lineCap: 'square',
	   lineWidth: 2,
	   animate: ({ duration: 2000, enabled: true }),
	});

	$('#weatherBig').samWeather({tipo:'big'});