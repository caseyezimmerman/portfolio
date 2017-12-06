

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
    
		

});

