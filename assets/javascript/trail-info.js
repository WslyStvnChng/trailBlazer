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
  var campingChecklist = ["Tent", "Sleeping bag", "Sleeping pad", "Camping chairs", "Firestarter", "Extra clothes"];

  // Add checklist item to list from user input
  $("#submit-item").on("click", function(event) {
    event.preventDefault();

    // Get item from user input and store in variable
    var newItem = $("#add-item").val().trim();
    // Remove spaces from input to store in id value
    var newItemId = newItem.replace(/\s/g,'');
    // Write to DOM
    var checkListItem = $("<p>");
    var newInputItem = $("<input>");
    newInputItem.attr("type", "checkbox");
    newInputItem.addClass("checkbox");
    newInputItem.attr("id", newItemId);


    var labelTag = $("<label>");
    labelTag.attr("for", newItemId);
    labelTag.addClass("checklist-item");
    labelTag.append(newItem);
    checkListItem.append(newInputItem);
    checkListItem.append(labelTag);

    $("#checklist").append(checkListItem);

    // Add code to save added items locally

    console.log(newItem);

  });



  // <script>
  //   // Initialize Firebase
  //   var config = {
  //     apiKey: "AIzaSyBEwnr_R2pjbyqaKWxKuSyQBtm3LbTdgS4",
  //     authDomain: "trailblazer-project.firebaseapp.com",
  //     databaseURL: "https://trailblazer-project.firebaseio.com",
  //     projectId: "trailblazer-project",
  //     storageBucket: "trailblazer-project.appspot.com",
  //     messagingSenderId: "615321105967"
  //   };
  //   firebase.initializeApp(config);
  // </script>



});
