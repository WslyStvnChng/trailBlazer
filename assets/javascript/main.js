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

// Create a variable to reference the database.
var database = firebase.database();




    // Javascript for Date Picker Form Input 
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 1, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        format: 'mm/dd/yyyy',
        closeOnSelect: false // Close upon selecting a date,
      });

// Document Loads Before Code Runs
$(document).ready(function() {
    $('select').material_select();

    // Updates Miles in HTML When Range is Clicked
    $('.range-field').on('click', function(event){
        $('#miles-value').text($('#radius-input').val());
        console.log($('#radius-input').val())
    })

  // When Submit Button is Clicked
$(('#submit-button')).on('click', function (event){

    // Prevent the page from refreshing
    event.preventDefault();

    // Stores Inputs as Variables
    var location= $("#location-input").val().trim();
    console.log('Location:', location);
    var activity = $("select").val();
    console.log('Activity:', activity);
    var radius = $("#radius-input").val();
    console.log('Search Radius:', radius)
    var date = $("#date-input").val();
    console.log('Date', date)
   
    // Prevents Submit If Fields Are Empty
    if (location==="" || activity==="" || radius ==="" || date === "") {
        alert('Error! Please Enter All Info.')
    
    // Otherwise
    } else {

        // Save Variables to Firebase Database
        database.ref().push({
            location: location,
            activity: activity,
            radius: radius,
            date: date,
        });

        // Clear Input Boxes
        $('#location-input').val('');
        $('#activity').val('');
        $('#radius').val('');
        $('#date').val('');
        }
});

});