

$(document).ready(function(){
    $("#apc").hide()

    $("i").click(function(){
    	$("#apc").fadeToggle()
    })

    currentHeight= $("#height").height()
    console.log(currentHeight)
    
    $(window).resize(function(){
    	$("#atlanta").css({"height": $("#height").height()});
    })

    // $('.contact-buttons').addClass('animated bounceOutLeft');
    
    // $('.project-image').click(function(){
    //   $('.project-image').fadeToggle();      
    // });
    // $('.project-image').mouseout(function () {
    //       $('.project-image').show();      
    // });
		

});

