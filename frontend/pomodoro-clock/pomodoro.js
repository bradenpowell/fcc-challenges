$(document).ready(function () {
    var timerDisplay = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");
    var timerText = document.getElementById("timerText");
    var controls = document.getElementById("controls");

    //Initialize timer
    var seconds = 3;
    var minutes = 1;
    var break_minutes = 5;
    timerDisplay.innerHTML = minutes + ":00";
    var strtTimer = false;

    //Display user set values
    work.innerHTML = minutes + ":00"
    break_time.innerHTML = break_minutes + ":00";

    startBtn.onclick = function () {
        
        if(strtTimer == false) {
            timerText.style.visibility = "visible";
            controls.style.visibility = "hidden"; 
            strtTimer = true;
            minutes -= 1;
            setInterval(function () {
                //See if work time is up. 
                if(minutes == 0 && seconds == 1) {
                    //zero out the clock 
                    minutes = 0; 
                    seconds = 0;
                    timerDisplay.innerHTML = minutes + " : " + seconds;
                    
                    alert("Time for a Break!");
                    minutes = break_minutes;
                }
                seconds -= 1;
                if (seconds <= 0) {
                    minutes -= 1;
                    seconds = 59;
                }
    
                timerDisplay.innerHTML = minutes + " : " + seconds;
            }, 1000);
        }
    }

        ///Plus and Minus Buttons
    workPlus.onclick = function () {
        minutes += 1; 
        timerDisplay.innerHTML = minutes + " :00"
        work.innerHTML = minutes + " :00"
    }

    workMinus.onclick = function () {
        if(minutes >= 1) {
            minutes -= 1; 
            timerDisplay.innerHTML = minutes + " :00"
            work.innerHTML = minutes + " :00"
        }
    }

    breakPlus.onclick = function () {
        break_minutes += 1; 
        break_time.innerHTML = break_minutes + " :00";
    }

    breakMinus.onclick = function () {
        if(break_minutes >= 1) {
            break_minutes -= 1; 
            break_time.innerHTML = break_minutes + " :00"
        }
    }

    

});