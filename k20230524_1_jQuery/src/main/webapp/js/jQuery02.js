function a1() {
//	javascript
//	let span = document.getElementsByTagName('span');
//	console.log(span.length);
//	for(let i=0; i<span.length; i++){
//		span[i].style.color = 'mistyRose';
//	}	

//	jQuery
	$('span').css('color', 'blue'); // tag이름 : 태그 선택자
	
}

function a2() {
//	javascript
//	let t1 = document.getElementById('t1');
//	let t1 = document.querySelector('#t1');
//	t1.style.color = 'mistyRose';

//	jQuery
	$('#t1').css('color', 'mistyRose'); // id 선택자
}

function a3() {
//	javascript
//	let t2 = document.getElementsByClassName('t2');
//	for(let c of t2) {
//		c.style.color = 'blue';
//	}	
	
//	jQuery
	$('.t2').css('color', 'yellow'); // ,class: class 선택자
}

function a4() {
//	javascript
//	let child = document.querySelectorAll('li > span');	
//	for(let s of child) {
//		s.style.color = 'lavender';
//	}	
		
	
//	jQuery
	$('li > span').css('color', 'lavender');

}

function a5() {
//	javascript
//	let child = document.querySelectorAll('li span');	
//	for(let s of child) {
//		s.style.color = 'lightpink';
//	}	
	
//	jQuery
	$('li span').css('color', 'lightpink'); // 공백: 자손 선택자
}

//	:nth-child, :nth-last-child
//	같은 부모 요소를 가지는 형제 요소 중에서 특정 순서에 있는 요소를 선택하는 선택자이다.	
//	:nth-child()는 앞에서부터 세고 :nth-last-child()는 뒤에서부터 센다.
//	인수로 숫자, 연산식(곱하기는 숫자가 앞에 와야하고, 더하기 빼기는 숫자가 뒤에 와야 한다.
//	odd(홀수), even(짝수)도 사용할 수 있다.
//	javascript
function a6() {
	
//	jQuery
//	$('li').eq(0).css('backgroundColor', 'brown'); // 선택해놓고 고르기
//	$('li:eq(0)').css('backgroundColor', 'purple'); // 아예 0번째 선택하기

//	eq()는 index가 0부터 시작하고, nth-child는 index가 1부터 시작한다. => 주의...
//	$('li:nth-child(1)').css('backgroundColor', 'dodgerblue'); // 처음부터 위치를 센다. 
//	$('li:nth-last-child(1)').css('backgroundColor', 'red'); // 마지막부터 위치를 센다.
	
//	$('li:nth-child(odd)').css('backgroundColor', 'dodgerblue'); // 홀수 인덱스만 선택한다.
//	$('li:nth-child(even)').css('backgroundColor', 'orange'); // 짝수 인덱스만 선택한다.
	
//	n은 자동으로 0부터 1씩 증가하는 정수이고 '+', '-', '*' 연산을 사용할 수 있다.
//	$('li:nth-child(n)').css('backgroundColor', 'hotpink'); // 모두 선택된다.
//	$('li:nth-child(n + 3)').css('backgroundColor', 'hotpink'); // 3번째 인덱스부터 시작한다.
//	$('li:nth-child(2n + 1)').css('backgroundColor', 'hotpink'); // 홀수 인덱스만 선택한다.
	$('li:nth-child(2n)').css('backgroundColor', 'hotpink'); // 짝수 인덱스만 선택한다.
		
}


//	first-child: 같은 부모 요소를 가지는 형제 요소 중에서 첫번째 자식 요소만 선택한다.
function a7() {
//	$('li').eq(0).css('backgroundColor', 'brown');
//	$('li:first-child').css('backgroundColor', 'brown');
	$('li').first().css('backgroundColor', 'blue');	

}




function a8() {
//	$('li:last-child').css('backgroundColor', 'yellowgreen');
	$('li').last().css('backgroundColor', 'green');

}





















