$(document).ready(function() {
    //TODO: draw a grid
    const connect4 = new Connect4('#connect4')

    connect4.onPlayerMove = function() {
        $('#player').text(connect4.player); 
    }
    $('#restart').click(function() {
        connect4.restart(); 
    })
}); 