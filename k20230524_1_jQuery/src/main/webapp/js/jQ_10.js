$(() => {
	
	$('div').children().css('color', 'pink');
	
	$('div').children().click(function () {
		
		if($(this).is('p')) {
			$(this).css('color', 'lime'); 
		} else if($(this).is('span')) {
			$(this).css('color', 'red');
			
		} else {
			$(this).css('color', 'blue');
		}
		
		
	});
	
	
});