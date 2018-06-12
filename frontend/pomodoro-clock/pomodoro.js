$(document).ready(function() {
    var timerDisplay = document.getElementById("timer"); 

    timerDisplay.innerHTML = "Initiating...."; 
    var seconds = 60;
    var minutes = 24; 

    setInterval(function updateTimer() {
        seconds -= 1;
        if(seconds <= 0) {
            minutes -= 1; 
            seconds = 59;
        }

        timerDisplay.innerHTML = minutes + " : " + seconds; 
    }, 1000);
    
});

