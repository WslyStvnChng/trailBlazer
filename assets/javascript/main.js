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
       displayTrailInfo(latitude, longitude, radius);
    
        })
});





function displayTrailInfo(latitude, longitude, radius) {



    // Empties Trail Info Container
    $('#trail-info').empty();


    var apiKey = '200209309-2a8d10ade11cd96cedf39716cfa65127';

    // Creates URL with Search Term for Trail API
    var trailURL ='https://www.hikingproject.com/data/get-trails?lat=' + latitude + '&lon=' + longitude + '&sort=distance&maxResults=15&maxDistance=' + radius + '&key=' + apiKey;



    $.ajax({
        url: trailURL,
        method: "GET",
        // When AJAX Call is "Done"
        }).success(function(response) {


            console.log(response);

            for (var i=0; i<response.trails.length;i++) {

                // var trailLatitude = response.trails[i].latitude;
                // var trailLongitude = response.trails[i].longitude;
            $('#trail-info').append(
                '<div id=trail data-name="' + response.trails[i].name + '"data-latitude="' + response.trails[i].latitude + '"data-longitude="' + response.trails[i].longitude +'"><div id = "thumbnail"><img class="trail-thumbnail" src="' + response.trails[i].imgSmall + '"></div><div id="info"><br>Trail Name: ' + response.trails[i].name + ' Length: ' + response.trails[i].length + ' Rating: ' + response.trails[i].stars + ' Latitude: ' + response.trails[i].latitude + ' Longitude: ' + response.trails[i].longitude + ' Summary: ' +response.trails[i].summary + '</div>'
                )
                if (response.trails[i].conditionDetails === null){
                    console.log('No conditions');
                    $('#trail').append('</div>');
                } else {
                    $('#trail-info').append('<p>Conditions: ' + response.trails[i].conditionDetails + '</p>');
                    $('#trail').append('</div>');
                }
                $('#trail').data('Name', response.trails[i].name);
                $('#trail').data('Trail Latitude', response.trails[i].latitude);
                $('#trail').data('Trail Longitude', response.trails[i].longitude);
            }

            // Ben Ternary Advice
            // typeof thumbnail ==== 'string' ? thumbnail : defaultSrc

        }).error(function(error){
            console.log('Error', error);
        })
    


}

$(document).on('click', ('#trail'), function(event){
    var trailLatitude = $(this).data("latitude");
    console.log('Trail Latitude: ', trailLatitude);
    var trailLongitude = $(this).data('longitude');
    console.log('Trail Longitude: ', trailLongitude);
    var trailName = $(this).data("name");
    console.log('Trail Name: ', trailName)

    database.ref('/trails').set({
        trailName: trailName,
        trailLatitude: trailLatitude,
        trailLongitude: trailLongitude,
    })
})





});
