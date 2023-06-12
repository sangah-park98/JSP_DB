$(() => {
	
	$('div > p').eq(0).click(function () {
		$('div > b').first().toggle();
	});
	
	$('div > p').eq(1).click(function () {
		$('div > b').eq(1).toggle();
		$('div > b').html('기능 연결');		
	});
	
	
	
	
});