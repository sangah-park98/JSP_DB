$(() => {
	
//	$('p:eq(0)').css('backgroundColor', 'tomato');
//	$('p').eq(0).css('backgroundColor', 'skyblue');
//	$('span').css('color', 'green');
	
//	0번째 <p> 태그를 선택한 후 <span> 태그를 선택한다.
//	$('p:eq(0)').css('backgroundColor', 'tomato');
//	$('p:eq(0) > span').css('color', 'green');
	
//	$('p').eq(0).css('backgroundColor', 'skyblue');
//	$('p').eq(0).add('span:eq(0)').css('color', 'hotpink');
	
	$('div').children().css('color', 'pink');
	
	$('div').children().click(function () {
/*		if ($(this).is('span')) {
			$(this).css('color', 'red');
		}
		if ($(this).is('b')) {
			$(this).css('color', 'blue');
		}
		if ($(this).is('p')) {
			$(this).css('color', 'lime');
		}*/
		
			
		if($(this).is('p')) {
			$(this).css('color', 'lime'); 
		} else if($(this).is('span')) {
			$(this).css('color', 'red');
			
		} else {
			$(this).css('color', 'blue');
		}
		
		
		
	});
	
});





















