  // Directions to map services

// Initialize the Google Map API
var infoWindow;
function initMap() {
  //Latitude and Longitude of Denver, Colorado
  var myLatLng = { lat: 39.739236, lng: -104.990251 };

  //Google Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng
  });
  infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Haha Found You!");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
