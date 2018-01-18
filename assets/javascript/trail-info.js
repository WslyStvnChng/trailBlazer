$(document).ready(function() {

  // Checklist Array - Universal
  var universalChecklist = ["Water", "Extra food", "First aid kit", "Sunglasses"];

  // Checklist Arrays - Weather
  var hotChecklist = ["Breathable layers", "Sunscreen", "Rain gear"];
  var coldChecklist = ["Warm clothing", "Hat", "Gloves"];
  var rainChecklist = ["Rain gear", "Towel"];

  // Checklist Arrays - Activity
  var bikingChecklist = ["Bicycle", "Spare tubes", "Pump", "Bike shoes", "Socks"];
  var hikingChecklist = ["Appropriate footwear", "Backpack", "Socks"];
  var campingChecklist = ["Tent", "Camping chairs", "Firestarter", "Extra clothes"];



  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBEwnr_R2pjbyqaKWxKuSyQBtm3LbTdgS4",
      authDomain: "trailblazer-project.firebaseapp.com",
      databaseURL: "https://trailblazer-project.firebaseio.com",
      projectId: "trailblazer-project",
      storageBucket: "trailblazer-project.appspot.com",
      messagingSenderId: "615321105967"
    };
    firebase.initializeApp(config);
  </script>



});
