$(document).ready(function () {
    var timerDisplay = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");


    var seconds = 5;
    var minutes = 1;
    timerDisplay.innerHTML = minutes + ":00";
    var strtTimer = false;



    startBtn.onclick = function () {
        if(strtTimer == false) {
            strtTimer = true;
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
    }

    if(minutes < 0) {
        alert("Time is up!");
    }

});