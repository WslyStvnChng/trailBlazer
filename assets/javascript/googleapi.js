function initMap() {
  //Map Options
  var options = {
    zoom: 10,
    center:{lat: 39.739236,lng: -104.990251}
  }
  //New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(map, 'click', function(event){
    addMarker({coords:event.latLng});
  });
  //Add Marker
//   var marker = new google.maps.Marker({
//     position:{lat:39.739236,lng:-104.990251},
//     // position1:{lat:39.8367,lng:105.0372},
//     map:map
//   });

//   var infoWindow = new google.maps.InfoWindow({
//     content:'<h1>Denver, CO</h1>'
//   });

//   marker.addListener('click', function() {
//     infoWindow.open(map, marker);
//   });
// }
  addMarker({lat:39.739236,lng:-104.990251});
  addMarker({lat:39.8367,lng:-105.0372});
  addMarker({lat:39.6858,lng:-105.2728});

  //Add Marker Function
  function addMarker(coords){
    var marker = new google.maps.Marker({
        position: coords,
        map:map
    });
    
  }
}

