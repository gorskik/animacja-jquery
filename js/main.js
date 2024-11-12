$(document).ready(function() {

    $('#animateButton').on('click', function() {

$('#square').animate({
    
    left: '+=100px',
    width: '100px',
    height: '100px'
}, 3000, function() {
    
    setTimeout(function() {
        $('#square').css('background-color', 'blue');
        $('#square').html('<h2 style="margin: 0; line-height: 100px; color: white;">Animacja zakonczona</h2>');
    }, 5000);
});
});
});
