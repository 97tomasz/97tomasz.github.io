
google.maps.visualRefresh=true;
var map;
var coords = {
        lat: 51.29,
        lng: 0.06
    };
    
function initialize() {
    
    var mapDiv = document.getElementById('map');
    var latlng= new google.maps.LatLng(51.29,0.06);
    var 
	var mapOptions={
        center: latlng,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(mapDiv,mapOptions);
    var marker = new google.maps.Marker(
        {
            position: new google.maps.LatLng(51.29, 0.06),
            map: map,
            title: 'I am here!'
			mapTypeControl: true,
			mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds:['roadmap','terrain','hybrid']}
        });
        var infoWindow=new google.maps.InfoWindow({content:'<div class="info"> This is my marker! </div>'});
        google.maps.event.addListener(marker, 'click', function(){infoWindow.open(map, marker)});
        //changeMarkerPosition(marker);  
}

google.maps.event.addDomListener(window, 'load', initialize);

function changeMarkerPosition(marker) 
{
 var latlng = new google.maps.LatLng(51.29, 0.06);
 marker.setPosition(latlng);
 marker.setOptions
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