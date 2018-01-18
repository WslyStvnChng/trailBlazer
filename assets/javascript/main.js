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
    })

  // When Submit Button is Clicked
$(('#submit-button')).on('click', function (event){
    var latitude;
    var longitude;

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

    var cityState = location.split(", ");
    console.log(cityState);

    var city = cityState[0];
    city.replace(' ', '+');
    var state = cityState[1];
    


   
    // Prevents Submit If Fields Are Empty
    if (location==="" || activity==="" || radius ==="" || date === "") {
        alert('Error! Please Enter All Info.')
    
    // Otherwise
    } else {



        // Clear Input Boxes
        $('#location-input').val('');
        $('#activity').val('');
        $('#radius').val('');
        $('#date').val('');
        }

        var googleURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=AIzaSyBNceJKZRhFdZSITn-8ZwmzDyJ8Co6iZhQ'


        $.ajax({
            url: googleURL,
            method: "GET",
    
            // When AJAX Call is "Done"
            }).done(function(response) {
    
                console.log(response);
    
                for (var i=0; i<response.results.length;i++) {
                    console.log(response.results[i].geometry.location);
    
                    latitude = response.results[i].geometry.location.lat
                    console.log(latitude)
                    longitude = response.results[i].geometry.location.lng
                    console.log(longitude)
                }

            // Save Variables to Firebase Database
            database.ref('/searches').push({
                location: location,
                activity: activity,
                radius: radius,
                date: date,
                city: city,
                state: state,
                longitude: longitude,
                latitude: latitude,

        });
        // displayTrailInfo(activity, city, state, radius);
    
            })
});





function displayTrailInfo(activity, city, state, radius) {



    // Empties Trail Info Container
    $('#trail-info').empty();



    // Creates URL with Search Term for Trail API
    var trailURL = 'https://trailapi-trailapi.p.mashape.com/?limi=20&q[activities_activity_type_name_eq]=' + activity + '&q[city_cont]=' + city + '&q[state_cont]=' + state + '&radius=' + radius + ''
    


    $.ajax({
        url: trailURL,
        method: "GET",
        headers: {
            "X-Mashape-Key": "rDimFecbrYmshNZTs7kWjpGnCzxIp1E6X65jsnNSd1k2SjPDBi", 
            "Accept": "text/plain"
    }
        // When AJAX Call is "Done"
        }).success(function(response) {

            console.log(response);
            console.log('Test: ', latitude, longitude)

            for (var i=0; i<response.places.length;i++) {
                console.log(response.places[i].activities[0].thumbnail);
            // $('#trail-info').append(
                '<div id = "thumbnail"><img class="trail-thumbnail" src="' + response.places[i].activities[0].thumbnail + '<div id="trail"></div></div>'

                // )
            }

            // Ben Ternary Advice
            // typeof thumbnail ==== 'string' ? thumbnail : defaultSrc

        }).error(function(error){
            console.log('Error', error);
        })
    


}





});
