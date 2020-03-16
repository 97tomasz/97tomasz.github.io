
google.maps.visualRefresh=true;
var map;
var coords = {
        lat: 51.490866,
        lng: -0.104938
    };    
var labels = '1234';
var labelIndex = 0;
var mapChangex;
var mapchangey;
var areaMarker=false;
function initialize() {
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
        var infoWindow = new google.maps.InfoWindow({content:'<div class="info"> This is my marker! </div>'});
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

function changeMarkerPosition(marker) 
{
 var latlng = new google.maps.LatLng(51.29, 0.06);
 marker.setPosition(latlng);
 marker.setOptions
}
function LatOOB(coords)
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
function addAntipode()
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
function addAreaMarker()
{
	if (areaMarker==false) 
	{
		areaMarker=true;
		newMarker = interactiveMapChange();
		newMarker.setIcon(null);
	} else {
		areaMarker=false;
		marker1 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex+1.5,mapChangey+1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 1',label:'A',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		marker2 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex+1.5,mapChangey-1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 2',label:'B',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		marker3 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex-1.5,mapChangey-1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 3',label:'C',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		marker4 = new google.maps.Marker({position: new google.maps.LatLng(mapChangex-1.5,mapChangey+1.5), map:map,animation:google.maps.Animation.DROP,title:'Corner 4',label:'D',icon: {
		url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}});
		var infoWindow1 = new google.maps.InfoWindow({content: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=mapChangex,mapChangey&heading=151%pitch=0&key=AIzaSyCpR2-InfUhJU0jAOKPMotRV_-5_zEDPDc&y=3.exp"});
		var infoWindow2 = new google.maps.InfoWindow({content:'<div class="info"> This is my marker! </div>'});
		var infoWindow3 = new google.maps.InfoWindow({content:'<div class="info"> This is my marker! </div>'});
		var infoWindow4 = new google.maps.InfoWindow({content:'<div class="info"> This is my marker! </div>'});
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
function randomMapChange()
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
