$(()=> {
	// <div> 태그의 첫번째 요소로 <p> 태그를 만들어 넣어준다.
	$('button').eq(0).click(function () {
		// prepend(): 1. 인수로 지정된 요소를 선택된 요소 내부에 첫번째 요소로 추가한다.
		//            2. 태그를 이동한다.
		// $('<tag>'): 인수로 지정된 태그를 만든다.
		// $('div').eq(0).prepend($('<p>')).html('prepend'); // 이렇게 사용하지 않도록 주의한다.
		
		// prepend() 함수에서 태그를 만들고 필요한 속성까지 모두 지정해야 한다.
		// $('div').eq(0).prepend($('<p>').html('prepend').addClass('prepend'));
		
		// jQuery는 변수를 선언할 때 태그를 기억하는 변수를 선언할 수 있는데 앞에 '$'를 붙이면 된다.
		let $p = $('<p>').html('prepend').addClass('prepend');
		$('div').eq(0).prepend($p);
		
		// 태그를 만들어서 넣으면 태그가 추가되지만 태그를 선택해서 넣으면 선택한 태그가 이동된다.
		$('div').eq(0).prepend($('div > p:last'));
		
	});
	
	// <div> 태그의 마지막 요소로 <p> 태그를 만들어 넣어준다.
	$('button').eq(1).click(function () {
		// append(): 인수로 지정된 요소를 선택된 요소 내부에 마지막 요소로 추가한다.
		// $('div').eq(0).append($('<p>').html('append').addClass('append'));
		let $p = $('<p>').html('append').addClass('append');
		$('div').eq(0).append($p);
		
		// 태그를 만들어서 넣으면 태그가 추가되지만 태그를 선택해서 넣으면 선택한 태그가 이동된다.
		$('div').eq(0).append($('div > p:first'));
	});
	
	
	$('button').eq(2).click(function () {
		$('div').eq(0).html('<marquee>html 요소를 변경한다.</marquee>');
		
	});
	
	
	$('button').eq(3).click(function () {
		$('div').eq(0).text('<marquee>text 요소를 변경한다.</marquee>');
	});
});