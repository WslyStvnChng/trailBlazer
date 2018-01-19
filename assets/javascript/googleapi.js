
var infoWindow;
function init() {
  var myLatLng = { lat: 39.739236, lng: -104.990251 }; //Dynamtic populate their location from firebase

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng
  });

  var trail = new google.maps.Marker({
    position: { lat: 39.738233, lng: -104.990255},
    map: map,
    title: "Train Name: "
  });

  var trail2 = new google.maps.Marker({
    position: { lat: 39.74000, lng: -104.980255 },
    map: map,
    title: "Trail Name: ",
  });

  var trail3 = new google.maps.Marker({
    position: { lat: 39.74000, lng: -104.980255 },
    map: map,
    title: "Trail Name: ",
  });

  var trail2 = new google.maps.Marker({
    position: { lat: 39.74, lng: -104.980255 },
    map: map,
    title: "Trail Name: "
  });

  var trail2 = new google.maps.Marker({
    position: { lat: 39.74, lng: -104.980255 },
    map: map,
    title: "Trail Name: "
  });
  
  var trail2 = new google.maps.Marker({
    position: { lat: 39.74, lng: -104.980255 },
    map: map,
    title: "Trail Name: "
  });

 
}



