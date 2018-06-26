$(document).ready(function () {
    var timerDisplay = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");
    var workPlus = document.getElementById("workPlus");
    var workMinus = document.getElementById("workMinus");
    var breakPlus = document.getElementById("breakPlus");
    var breakMinus = document.getElementById("breakMinus");
    var set_workTime = document.getElementById("work");


    var seconds = 59;
    var minutes = 25;
    var break_minutes = 5;
    timerDisplay.innerHTML = minutes + ":00";
    var strtTimer = false;

    work.innerHTML = minutes + ":00"
    break_time.innerHTML = break_minutes + ":00";

    startBtn.onclick = function () {
        
        if(strtTimer == false) {
           
            strtTimer = true;
            minutes -= 1;
            setInterval(function () {
                if(minutes == 0 && seconds == 1) {
                    //zero out the clock 
                    minutes = 0; 
                    seconds = 0;
                    timerDisplay.innerHTML = minutes + " : " + seconds;
                    
                    alert("Time for a Break!");
                    minutes = 5;
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

    workPlus.onclick = function () {
        minutes += 1; 
        timerDisplay.innerHTML = minutes + " :00"
        set_workTime.innerHTML = minutes + " :00"
    }

    workMinus.onclick = function () {
        minutes -= 1; 
        timerDisplay.innerHTML = minutes + " :00"
        set_workTime.innerHTML = minutes + " :00"
    }
    breakPlus.onclick = function () {
        minutes += 1; 
        timerDisplay.innerHTML = minutes + " :00"
    }

    breakPlus.onclick = function () {
        break_minutes += 1; 
        break_time.innerHTML = break_minutes + " :00"
    }

    breakMinus.onclick = function () {
        break_minutes -= 1; 
        break_time.innerHTML = break_minutes + " :00"
    }

    

});