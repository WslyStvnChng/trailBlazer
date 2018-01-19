//Firebase Config Key
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


//Google Maps Portion//




//Firebase data to grab information to intput on page
// database.ref('/trails/').on('child_added', function (snapshot){

//     var mapLatitude = snapshot.trailLatitude;
//     var mapLongitude = snapshot.trailLatitude;

//     var location = mapLatitude + mapLongitude;
    
    //Maybe I need to push this information into google maps

//Initialize Function of Map
// function initMap() {
//   //Map Options
//   var options = {
//     zoom: 10,
//     center:{lat: 39.739236,lng: -104.990251} //Google Map Center on Denver, CO
//     // center: location
//   }
//   //New Map
//   var map = new google.maps.Map(document.getElementById('map'), options)

//   var marker = new google.maps.Marker({
//     position: center,
//     map: map,
//   })

// function initMap() {
//         var myLatLng = {lat: 39.739236,lng: -104.990251};

//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: myLatLng
//         });

//         var marker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Hello World!'
//         });
//       }
