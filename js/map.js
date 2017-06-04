$('document').ready(function(){
		var mymap = L.map('mapid').setView([47.240932, 39.711018], 17);
		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		}).addTo( mymap );

		L.Control.measureControl().addTo(mymap);

		L.control.mousePosition().addTo(mymap);

		// Храм св.мч. Татианы при ДГТУ
		var myIcon = L.icon({
		    iconUrl: 'my_icon/church.png',
		    iconSize: [55, 55],
		    iconAnchor: [25, 55],
		    popupAnchor: [3, -55],
		    // shadowUrl: 'my-icon-shadow.png',
		    // shadowSize: [68, 95],
		    // shadowAnchor: [22, 94]
		});
		L.marker([47.239294, 39.711130], {icon: myIcon})
		.bindPopup('Храм св.мч. Татианы при ДГТУ')
		.addTo(mymap);

		// Спортивный манеж ДГТУ
		var myIcon = L.icon({
		    iconUrl: 'my_icon/manej.png',
		    iconSize: [55, 55],
		    iconAnchor: [25, 55],
		    popupAnchor: [3, -55],
		    // shadowUrl: 'my-icon-shadow.png',
		    // shadowSize: [68, 95],
		    // shadowAnchor: [22, 94]
		});
		L.marker([47.241027, 39.709208], {icon: myIcon})
		.bindPopup('Спортивный манеж ДГТУ'+"<img src=''></img>")
		.addTo(mymap);

		// Бассейн ДГТУ
		var myIcon = L.icon({
		    iconUrl: 'my_icon/pool.png',
		    iconSize: [55, 55],
		    iconAnchor: [25, 55],
		    popupAnchor: [3, -55],
		    // shadowUrl: 'my-icon-shadow.png',
		    // shadowSize: [68, 95],
		    // shadowAnchor: [22, 94]
		});
		L.marker([47.238688, 39.710940], {icon: myIcon})
		.bindPopup('Бассейн ДГТУ')
		.addTo(mymap);

		// Парковка
		var myIcon = L.icon({
		    iconUrl: 'my_icon/Parking.png',
		    iconSize: [55, 55],
		    iconAnchor: [25, 55],
		    popupAnchor: [3, -55],
		    // shadowUrl: 'my-icon-shadow.png',
		    // shadowSize: [68, 95],
		    // shadowAnchor: [22, 94]
		});
		L.marker([47.240406, 39.712438], {icon: myIcon})
		.bindPopup('Парковка')
		.addTo(mymap);

		// Парковка
		var myIcon = L.icon({
		    iconUrl: 'my_icon/dormitory.png',
		    iconSize: [55, 55],
		    iconAnchor: [25, 55],
		    popupAnchor: [3, -55],
		    // shadowUrl: 'my-icon-shadow.png',
		    // shadowSize: [68, 95],
		    // shadowAnchor: [22, 94]
		});
		L.marker([47.239503, 39.712969], {icon: myIcon})
		.bindPopup('Общежитие ДГТУ')
		.addTo(mymap);
});