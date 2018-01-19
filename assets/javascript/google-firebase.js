//Firebase Confi Key
var config = {
  apiKey: "AIzaSyBEwnr_R2pjbyqaKWxKuSyQBtm3LbTdgS4",
  authDomain: "trailblazer-project.firebaseapp.com",
  databaseURL: "https://trailblazer-project.firebaseio.com",
  projectId: "trailblazer-project",
  storageBucket: "trailblazer-project.appspot.com",
  messagingSenderId: "615321105967"
};

//Google Maps Key
googleMapsKey: "AIzaSyBNceJKZRhFdZSITn-8ZwmzDyJ8Co6iZhQ";


//Initialize firebase
firebase.initializeApp(config);
  // console.log(firebase);

var database = firebase.database();

//Creating a function to grab the element of map and using the src of google api to write on Dom

(function($){
  var script = document.createElement('map');
  script.src = "//maps.googleapis.com/maps/api/js?&callback=findSearches";
  document.body.appendChild(script);
});

function initialize(searches) {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    zoom: 10,
    // mapTypeId = 'terrain'
    //Using Denver to visualize the Map
    center:{lat: 39.739236,lng: -104.990251}
  };
  //Display a map on the page
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //Search Inputs on Firebase should log location
  console.log(searches)
  console.log(searches.length);

  //Info Window Content
  var infoWindowContent = [
    ['<div class="info_current">' + '<p>' + "location" + "</p>" + "/>"]
  ];

  //Display multiple markers on map
var infoWindow = new google.maps.InfoWindow(), marker, i;
}
//Loop through our array of searches and place onto map
for(i = 0; i < searches.length; i++) {
  var position = new google.maps.LatLng(markers[i][1].lat(), markers[i][1].lng());
  bounders.extend(position);
  searches = new google.maps.Searches({
    location: latLng,
    map: map,
    title: markers[i][0]
  });

  //Allow searches to have info window
  google.maps.event.addListener(searches, 'click', (function(searches, i){
    return function() {
      infoWindow.setContent(infoWindowContent[i][0]);
      infoWindow.open(map, searches);
    }
  }) (searches, i));
}
var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(e){
  this.setZoom(10);
});

function findSearches() {
  searches = [];

  var data = firebase.database();

  var latRef = firebase.database().ref('searches/latitude');
  var lonRef = firebaes.database().ref('searches/longitude');
  dataRef.on("child_added", function(data){
    var key = data.key;
    const location = data.val();
    const longitude = longitude.val();
    const latitude = latitude.val();
    var search = [longitude, latitude];
    searches.push(searches);
  });
  initialize(searches);
}
