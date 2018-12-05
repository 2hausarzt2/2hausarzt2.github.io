     function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center:  {lat: 53.5573, lng: 9.97165},
          zoom: 16,
          
		  
		  styles:  [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]},
		  {"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
		  {"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"poi.business","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
		  {"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]},
		  {"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]},
		  {"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]},
		  {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#c0c0c0"},{"saturation":"0"}]},
		  {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
		  {"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},
		  {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#c0c0c0"}]},
		  {"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#61acc6"}]},
		  {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]},
		  {"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"color":"#c0dff4"}]},
		  {"featureType":"transit.station.rail","elementType":"geometry.fill","stylers":[{"color":"#00708b"}]},
		  {"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#acd4e1"}]}]

	   });
     
 	// Создаем маркер на карте
   var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 53.5573, lng: 9.97165},

     

     // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
 
              
                // Укажем свою иконку для маркера
                icon: 'images/1fff.png'
 	});
     // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading"><font  color="#606060">Dr. med. JOACHIM GOTTBERG</font></h4>'+
          '<div id="bodyContent">'+
          '<p><font color="#606060">HAUSARZTPRAXIS</font></p>' +
          ' <h6><font color="#606060">Adresse:Feldstraße 44, 20357 Hamburg</font></h6>' +
			
          '</div>'+
          '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
       content: contentString,

	   maxWidth: 400
       
	});

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

	 }
