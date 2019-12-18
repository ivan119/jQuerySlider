/* Fade To Left Function */ 
$(document).ready(function() {
    $('#moveleft').click(function() {
        $('#box1 img:first-child').hide(500);
         $('#box2 img:last-child').fadeToggle(500);
        setTimeout(
            function() 
            {
               $('#box1 img:first-child').prependTo("#box2").show(500);
               $('#box2 img:last-child').appendTo("#box1").show(500);
            },
            500);
     });  
});

/* Fade To Right Function */ 
$(document).ready(function() {
    $('#moveright').click(function() {
        $('#box1 img:last-child').hide(500);
         $('#box2 img:first-child').hide(500);
        setTimeout(
            function() 
            {
               $('#box1 img:last-child').appendTo("#box2").fadeToggle(500);
               $('#box2 img:first-child').prependTo("#box1").show(500);
            },
             500);
     });  
});
