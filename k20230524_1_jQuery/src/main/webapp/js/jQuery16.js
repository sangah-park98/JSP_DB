$(() => {
	
	$('#random').click(function () {
	$('#shuffle').css('display', 'block');
	$('#shuffle').cycle({ 
	    fx:     'shuffle', 
	    easing: 'easeOutBack', 
	    delay:  -500 
	});
		
	});
});


$('#up').cycle({ 
    fx:    'curtainX', 
    sync:  false, 
    delay: -500 
 });