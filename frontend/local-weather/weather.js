var apiLink = "https://fcc-weather-api.glitch.me/api/current?";
var tempUnit = 'C';
var currentlyCels;



$( document ).ready( function() {
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
        x.innerHTML = lat + "<br>" + lon;
        });
    } else {
    console.log("Geolocation is not supported by this browser.");
    }

});

function getWeather(lat, lon) {
    var requestURL = apiLink + lat + "&" + lon;
    $.ajax({url: requestURL, success: function(result) {
        var tempInF = Math.round((result.main.temp) * 1.8 + 32);
        $("#temp").text(tempInF + String.fromCharCode(176) + "F");
        $("#desc").text(result.weather[0].description); //FIXME: make this into uppercase?
        $("#city").text(result.name);
        getIcon(result.weather[0].main);

    }})
}

function getIcon(status) {
    var desc = status.toLowerCase();
        switch (desc) {
            case 'thunderstorm':
                $('.wi').addClass('wi-storm-showers');
            case 'drizzle':
                $('.wi').addClass('wi-sprinkle');
            case 'rain':
                $('.wi').addClass('wi-rain');
            case 'snow':
                $('.wi').addClass('wi-snow');
            case 'atmosphere':
                $('.wi').addClass('wi-fog');
            case 'clear':
                $('.wi').addClass('wi-day-sunny');
            case 'clouds':
                $('.wi').addClass('wi-cloudy');
        }
}