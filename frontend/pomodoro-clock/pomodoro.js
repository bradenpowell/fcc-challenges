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
                if(minutes == 0 && seconds == 1) {
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

    

});