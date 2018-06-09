var apiLink = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentlyCels



$( document ).ready( function() {
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        //getWeather(lat, lon);
        x.innerHTML = lat + "<br>" + lon;
        });
    } else {
    console.log("Geolocation is not supported by this browser.");
    }

});