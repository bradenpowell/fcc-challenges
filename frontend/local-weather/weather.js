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
        //$("#desc").text(result.weather.description);
       // $("#main_desc").text(result.weather.O.main);
        $("#city").text(result.name);
    }})
}