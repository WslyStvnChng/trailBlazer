
function initMap() {
    var myLatlng = new google.maps.LatLng(39.739236, -104.990251);
    var mapOptions = {
        zoom: 9,
        center: myLatlng,
        mapTypeId: 'terrain'
        };
   
    var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
}

