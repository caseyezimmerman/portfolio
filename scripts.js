

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
    $(".show-me").hide()
    
    $("#react").hover(function(){
        $("#show-react").fadeToggle()
    })

    $("#node").hover(function(){
        $("#show-node").fadeToggle()
    })

    $("#html").hover(function(){
        $("#show-html").fadeToggle()
    })

    $("#css").hover(function(){
        $("#show-css").fadeToggle()
    })

    $("#py").hover(function(){
        $("#show-py").fadeToggle()
    })
    $("#py").hover(function(){
        $("#show-rpg").fadeToggle()
    })

    $("#redux").hover(function(){
        $("#show-redux").fadeToggle()
    })

    $("#sql").hover(function(){
        $("#show-sql").fadeToggle()
    })
	
    $("#git").hover(function(){
        $("#show-git").fadeToggle()
    })

    $("#js").hover(function(){
        $("#show-js").fadeToggle()
    })

    $("#jquery").hover(function(){
        $("#show-jquery").fadeToggle()
    })

    $("#aws").hover(function(){
        $("#show-aws").fadeToggle()
    })

    $("#express").hover(function(){
        $("#show-express").fadeToggle()
    })

});

