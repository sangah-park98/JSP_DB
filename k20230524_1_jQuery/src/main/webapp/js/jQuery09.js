$(() => {
	
//	$('div > p> b').css({'color':'red', 'fontsize': '30px'});
	$('div').find('p').find('b').css({'color':'red', 'fontsize': '30px'});
	
	
//	$('#chd').text('저팔계');
//	children() 함수의 인수를 생략하면 모든 자식 요소가 선택된다.
	$('div').children('#chd').html('<i>베지터</i>');
	
	$('span').css('fontSize', '20px').css('backgroundColor', 'tomato');
	
	$('span').parent().css('backgroundColor', 'skyblue');
	
	$('span').parents('div').css('backgroundColor', 'yellow');
	
	$('p:eq(2)').next().css('backgroundColor', 'lavender');
	//$('p:eq(3)').css('backgroundColor', 'lavender');
	
	$('p:eq(2)').prev().css('backgroundColor', 'green');
	
});


