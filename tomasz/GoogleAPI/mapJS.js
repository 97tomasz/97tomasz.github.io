
google.maps.visualRefresh=true;
var map;
var coords = {
        lat: 51.490866,
        lng: -0.104938
    };    
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
			animation: google.maps.Animation.DROP
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
function interactiveMapChange()
{
	new google.maps.Marker({position: new google.maps.LatLng(prompt("Latitude: "),prompt("Longitude: ")), map:map, title:'New Marker',animation:google.maps.Animation.BOUNCE});
	
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