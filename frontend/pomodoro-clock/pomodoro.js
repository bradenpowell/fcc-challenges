$(document).ready(function () {
    var timerDisplay = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");

    timerDisplay.innerHTML = "Click Start to Start...";
    var seconds = 60;
    var minutes = 24;



    startBtn.onclick = function () {
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