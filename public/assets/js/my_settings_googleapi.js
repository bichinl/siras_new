	//==========================================================
	//
	//	GOOGLE MAPS
	//
	//----------------------------------------------------------
	function sourcode_maps(id_obj, dir_lat, dir_logn) {

	    var pos = new google.maps.LatLng(dir_lat, dir_logn);
	    var mapOptions = {
	        zoom: 13,
	        center: pos,
	        disableDefaultUI: false,
	        scrollwheel: false,
	        styles: [{
	            "stylers": [{
	                "hue": "#820000"
	            }, {
	                "gamma": 0
	            }]
	        }],
	    };

	    var map = new google.maps.Map(document.getElementById(id_obj), mapOptions);

	    /*var marker = new google.maps.Marker({
	        map: map,
	        position: pos,
	        // animation: google.maps.Animation.DROP,
	        // icon: siras_icon

	        popup: true,
	        flat: true,
	    });

	    var infowindow = new google.maps.InfoWindow({
	        content: '<div style="width:180px"><p><img src="../img/sourcode_logo_small.png"></p><p><strong><i class="fa fa-map-marker"></i> Nuñez 4 Int 30</strong><br/>Col. Centro, Ciudad Guzman</p></div>'
	    });
	    infowindow.open(map, marker);*/

	    var addresses = [
	    	'Colon 290, Ciudad Guzman, Jalisco',
	    	'Moctezuma 470, Ciudad Guzman, Jalisco',
	    	'Nuñez 4, Ciudad Guzman, Jalisco',
	    	'Nuñez 30, Ciudad Guzman, Jalisco'
	    ];

	    for (var x = 0; x < addresses.length; x++) {
	        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function(data) {
	            var p = data.results[0].geometry.location
	            var latlng = new google.maps.LatLng(p.lat, p.lng);
	            new google.maps.Marker({
	                position: latlng,
	                animation: google.maps.Animation.DROP,
	                map: map
	            });

	        });
	    }
	}

	google.maps.event.addDomListener(window, 'load', function() {
	    sourcode_maps('googlemaps', 19.7, -103.466667);
	});

	window.onresize = function() {
	    sourcode_maps('googlemaps', 19.7, -103.466667);
	};

