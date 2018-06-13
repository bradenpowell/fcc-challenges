$(document).ready(function () {
    var timerDisplay = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");


    var seconds = 59;
    var minutes = 25;
    timerDisplay.innerHTML = minutes + ":00";



    startBtn.onclick = function () {
        minutes -= 1;
        setInterval(function () {
            seconds -= 1;
            if (seconds <= 0) {
                minutes -= 1;
                seconds = 59;
            }

            timerDisplay.innerHTML = minutes + " : " + seconds;
        }, 1000);
    }

});