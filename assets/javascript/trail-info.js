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

  // User-defined checklist Array
  var userChecklist = [];


  var list = JSON.parse(localStorage.getItem("checklist"));

  // Checks to see if the todolist exists in localStorage and is an array currently
  // If not, set a local list variable to an empty array
  // Otherwise list is our current list of todos
  if (!Array.isArray(list)) {
    list = [];
  }

  function writeChecklist() {
    // $("#checklist").empty(); // empties out the html

    var insideList = JSON.parse(localStorage.getItem("checklist"));

    // Checks to see if we have any todos in localStorage
    // If we do, set the local insideList variable to our todos
    // Otherwise set the local insideList variable to an empty array
    if (!Array.isArray(insideList)) {
      insideList = [];
    }

    // render our insideList todos to the page
    for (var i = 0; i < insideList.length; i++) {
      var p = $("<p>").text(insideList[i]);
      var b = $("<button class='delete'>").text("x").attr("data-index", i);
      p.prepend(b);
      $("#checklist").prepend(p);
    }
  }

  writeChecklist();

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

    userChecklist.push(newItem);
    $("#checklist").append(checkListItem);
    $("#add-item").empty();

    // Add code to save added items locally

    console.log(userChecklist);

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
