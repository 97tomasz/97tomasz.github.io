
google.maps.visualRefresh=true;
var map; 																			//global variables, such as whole map, starting co-ordinates, labels for buttons, lat and lng variables for Area Markers and antipode 
var coords = {
        lat: 51.490866,
        lng: -0.104938
    };    
var labels = '1234';
var labelIndex = 0;
var mapChangex;
var mapchangey;
var areaMarker=false;
var polygonCheck=false;
var routey;
var displays;
var alternateRoute;
function initialize() 																//initializing the map, map options & marker
{
    var mapDiv = document.getElementById('map');
    var latlng= new google.maps.LatLng(coords);
	var mapOptions=
	{
        center: latlng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(mapDiv,mapOptions);
    var defaultMarker = 
		new google.maps.Marker(
        {
			map: map,
            position: new google.maps.LatLng(coords),
            title: 'I am here!',
			animation: google.maps.Animation.BOUNCE
        });
        var infoWindow = new google.maps.InfoWindow({
			content:'<div class="info">Default Marker</div><img src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"/>'});
		google.maps.event.addListener(defaultMarker, 'click', function(){infoWindow.open(map, defaultMarker)});
        //changeMarkerPosition(marker);
	var defaultMarker2 = 
		new google.maps.Marker(
		{
			position: new google.maps.LatLng(52.29, 0.06),
			map:map,
			title: 'I am not here!'
		});
}

google.maps.event.addDomListener(window, 'load', initialize);

function changeMarkerPosition(marker) //button 1
{
 var latlng = new google.maps.LatLng(51.29, 0.06);
 marker.setPosition(latlng);
 marker.setOptions
}
function LatOOB(coords) //latitude out of bounds
{
	coords=coords-180;
	return coords;
}
function interactiveMapChange()
{
	mapChangex = prompt("Latitude: ");
	mapChangey = prompt("Longitude: ");
	mapChangex=parseInt(mapChangex);
	mapChangey=parseInt(mapChangey);
	newMarker = new google.maps.Marker({position: new google.maps.LatLng(mapChangex,mapChangey), map:map,animation:google.maps.Animation.DROP,title:'New Marker ' + labels.charAt(labelIndex),label:labels.charAt(labelIndex),icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}});
	labelIndex++;
	map.setOptions({center: new google.maps.LatLng(mapChangex,mapChangey)});
	return newMarker;
}
function randomMapChange() //button 2
{
    min = Math.ceil(0);
    max = Math.floor(1);
    if (Math.floor(Math.random() * (max - min + 1)) + min == 1) {
	mapChangex = mapChangex - (Math.random()*2);
	}else{
	mapChangex = mapChangex + (Math.random()*2);
	}
	min = Math.ceil(0);
    max = Math.floor(1);
    if (Math.floor(Math.random() * (max - min + 1)) + min == 1) {
	mapChangey = mapChangey - (Math.random()*2);
	}else{
	mapChangey = mapChangey + (Math.random()*2);
	}
	new google.maps.Marker({position: new google.maps.LatLng(mapChangex,mapChangey),map:map,animation:google.maps.Animation.DROP,title:'Random Generation',icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}});
}
function addAntipode() //button 3
{
	mapChangex=prompt("Latitude: ");
	mapChangey=prompt("Longitude: ");
	mapChangex=parseInt(mapChangex);
	mapChangey=parseInt(mapChangey);
	mapChangex=mapChangex-mapChangex-mapChangex;
	mapChangey=mapChangex-180;
	newMarker = new google.maps.Marker({position: new google.maps.LatLng(mapChangex,mapChangey), map:map,animation:google.maps.Animation.DROP,title:'New Antipode',label:'antipode',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
	map.setOptions({center: new google.maps.LatLng(mapChangex,mapChangey)});
}
function addAreaMarker() //button 4
{
	var url1="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=";
	var url2=url1;
	var url3=url1;
	var url4=url1;
	if (areaMarker==false) 
	{
		areaMarker=true;
		newMarker = interactiveMapChange();
		newMarker.setIcon(null);
	} else {
		areaMarker=false;
		marker1 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex+1.5,mapChangey+1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 1',label:'A',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		url1+=mapChangex+1.5+","+mapChangey+1.5;
		url1+="&pitch=0&radius=100000&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp";
		marker2 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex+1.5,mapChangey-1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 2',label:'B',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		url2+=mapChangex+1.5+","+mapChangey-1.5;
		url2+="&pitch=0&radius=100000&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp";
		marker3 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex-1.5,mapChangey-1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 3',label:'C',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		url3+=mapChangex-1.5+","+mapChangey-1.5;
		url3+="&pitch=0&radius=100000&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp";
		marker4 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex-1.5,mapChangey+1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 4',label:'D',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		url4+=mapChangex-1.5+","+mapChangey+1.5;
		url4+="&pitch=0&radius=100000&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp";
		var infoWindow1 = new google.maps.InfoWindow({content:'<img src='+url1+'/>'});
		var infoWindow2 = new google.maps.InfoWindow({content:'<img src='+url2+'/>'});
		var infoWindow3 = new google.maps.InfoWindow({content:'<img src='+url3+'/>'});
		var infoWindow4 = new google.maps.InfoWindow({content:'<img src='+url4+'/>'});
		var markerImg2=document.getElementById('markerImg2');
		//markerImg2.src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + mapChangex+","+mapChangey+ "&heading=151%pitch=0&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp"
		google.maps.event.addListener(marker1, 'click', function(){infoWindow1.open(map, marker1)});
		google.maps.event.addListener(marker2, 'click', function(){infoWindow2.open(map, marker2)});
		google.maps.event.addListener(marker3, 'click', function(){infoWindow3.open(map, marker3)});
		google.maps.event.addListener(marker4, 'click', function(){infoWindow4.open(map, marker4)});
		google.maps.event.addDomListener(window, 'load', initialize);
		min = Math.ceil(0);
		max = Math.floor(1);
		if (Math.floor(Math.random() * (max - min + 1)) + min == 1) {
			mapChangex = mapChangex - (Math.random()-1);
		}else{
			mapChangex = mapChangex + (Math.random()-1);
		}
		min = Math.ceil(0);
		max = Math.floor(1);
		if (Math.floor(Math.random() * (max - min + 1)) + min == 1) {
			mapChangey = mapChangey - (Math.random());
		}else{
			mapChangey = mapChangey + (Math.random());
		}
		marker5 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex-0.5,mapChangey+0.5), map:map,animation:google.maps.Animation.DROP,title:'Random Marker',label:'X',size:30,icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}});
	}
}
function addContour() //button 5
{
	var polygon = new google.maps.Polygon({
		path: new google.maps.MVCArray(), 												//uses path as added to the array. 
		map: map,
		clickable: false,
		fillColor: "blue"
	});	
	if (!polygonCheck){																	//if false Polygon is added
		polygonCheck = true; 															//boolean to alternate between on and off. 
		polygon.setMap(map);
		listener = google.maps.event.addListener(map,'click',function(i) {
			var path = polygon.getPath();
			path.push(i.latLng);
			var marker = new google.maps.Marker({
				position: i.latLng, 													//user click location. 
				map: map
			});
		});
		polygon.setOptions({clickable: true}); 											//enables markers to be placed in polygon. 
		hover = google.maps.event.addListener(polygon, "mouseover", function(event){	//creates a mouseover event and function. 
			polygon.setOptions({fillColor: 'yellow'});
			polygon.setMap(map);
			var marker = new google.maps.Marker({
				position: event.latLng, 												//sets marker to mouse location. 
				map: map,
				icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
			});
		});
		noHover = google.maps.event.addListener(polygon, "mouseout", function(event){	//when mouse leaves, the colour returns to original. 
			polygon.setOptions({fillColor: 'blue'});
			polygon.setMap(map);
		});	
	}
	else
	{
		google.maps.event.removeListener(hover,noHover);								//all listeners removed when button is switched off. 
		polygon.setOptions({clickable: false});
		polygonCheck = false; 															//boolean to alternate between on and off
		google.maps.event.removeListener(listener);
	}
}
function routeCalculation() //button 6
{
	var LatStart = prompt("Enter start latitude");//get coordinates
	var LonStart = prompt("Enter start longitude");
	
	var LatDest = prompt("Enter destination latitude");
	var LonDest = prompt("Enter destination longitude");
	
	var Start = {lat: parseFloat(LatStart), lng: parseFloat(LonStart)};
	var Dest = {lat: parseFloat(LatDest), lng: parseFloat(LonDest)};
	
	if(displays)
		displays.setMap(null);
	displays = new google.maps.DirectionsRenderer({
		suppressMarkers: true 
	});
	
	MarkerStart = new google.maps.Marker({
		position: new google.maps.LatLng(Start),
		map: map,
		icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
	});
	
	MarkerDest = new google.maps.Marker({
		position: new google.maps.LatLng(Dest),
		map: map,
		icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
	});
	
	var streetView = new google.maps.StreetViewService();
	
	MarkerStart.addListener('click', function() { 
		info.open(map, MarkerStart);
		streetView.getPanorama({location: Start, radius: 1000});
	});		
	
	MarkerDest.addListener('click', function() {
		info.open(map,MarkerDest);
		streetView.getPanorama({location: Dest, radius: 1000});
	});
	
	r = new google.maps.DirectionsService();
	displays.setMap(map);
	
	var routeRequest = {
		origin: Start,
		destination: Dest,
		travelMode: 'DRIVING',
		provideRouteAlternatives: true
	};
	
	r.route(routeRequest,function (reply, status){ 
		if (status == google.maps.DirectionsStatus.OK){
			displays.setDirections(reply);
			addSteps(reply, MarkerSave, info, map);
			if(!alternateRoute) 
				alternateRoute = new Array(reply.routes.length);
			else
				for (var i = 0; i < reply.routes.length; i++)
					alternateRoute[i].setMap(null);
		}
		for (var i = 0; i < reply.routes.length; i++) {
			alternateRoute[i] = new google.maps.DirectionsRenderer({ 
				polylineOptions: {strokeColor: '#2249a3'},  
	
			});
			alternateRoute[i].setDirections(reply); 
			alternateRoute[i].setRouteIndex(i);
			alternateRoute[i].setMap(map);
		}
	});
		
}
var MarkerSave = []; //part of button 6
function addSteps(alternateRoute, MarkerSave, info, map){ //part of button 6
	var alternate = alternateRoute.routes[0].legs[0];
	for (var i = 0; i < alternate.steps.length; i++) {
		var marker = MarkerSave[i] || new google.maps.Marker({ 
		icon: "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green.png" 
		});
		marker.setMap(map);
		marker.setPosition(alternate.steps[i].start_location); //markers added to start.
		addStreetView(info, marker, alternate.steps[i].instructions, map);
	}
}
var info = new google.maps.InfoWindow({
	content: '<div id="content" style="width:200px;height:200px;"></div>'
	});

function addStreetView(info, marker, map){
	google.maps.event.addListener(marker, 'click', function(){
		info.open(map, marker);
		streetView = new google.maps.StreetViewService();
		streetView.getPanorama({location: marker.getPosition(), radius: 1000},"https://maps.googleapis.com/maps/api/streetview?size=400x400&location="+location+"&pitch=0&radius=100000&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp");//location of marker provides street view info. 
	});
}
function zoomTo()
{
    map.setOptions({zoom: parseInt(prompt('zoom value'))});
}
function setTypeSAT()
{
    map.setOptions({mapTypeId: google.maps.MapTypeId.SATELLITE});
}
function setTypeROAD()
{
    map.setOptions({mapTypeId: google.maps.MapTypeId.ROADMAP});
}
function setTypeTERRAIN()
{
    map.setOptions({mapTypeId: google.maps.MapTypeId.TERRAIN});
}
function setTypeHYB()
{
    map.setOptions({mapTypeId: google.maps.MapTypeId.HYBRID});
}
function setTilt()
{
    if (map.getTilt()==45)
    {
       map.setTilt(0);
    }
    if (map.getTilt()==0)
    {
        map.setTilt(45);   
    }   
}
function setCentre()
{
    map.setOptions({center: new google.maps.LatLng(prompt("Latitude: "),prompt("Longitude: "))});
}
function toggleBounce()
{
	if (defaultMarker.getAnimation()!==null)
	{
		defaultMarker.setAnimation==null;
	}
	else
	{
		marker.setAnimation(google.maps.Animation.BOUNCE)
	}
}

