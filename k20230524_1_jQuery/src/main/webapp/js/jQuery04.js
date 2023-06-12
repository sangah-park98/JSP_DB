//	input 태그의 type 속성별 선택
//   :button: type 속성이 'button'인 모든 요소를 선택한다.
//   :checkbox: type 속성이 'checkbox'인 모든 요소를 선택한다.
//   :file: type 속성이 'file'인 모든 요소를 선택한다.
//   :image: type 속성이 'image'인 모든 요소를 선택한다.
//   :password: type 속성이 'password'인 모든 요소를 선택한다.
//   :radio: type 속성이 'radio'인 모든 요소를 선택한다.
//   :reset: type 속성이 'reset'인 모든 요소를 선택한다.
//   :submit: type 속성이 'submit'인 모든 요소를 선택한다.
//   :text: type 속성이 'text'인 모든 요소를 선택한다.
//   :checked: type 속성이 'checkbox' 또는 'radio'인 요소 중에서 체크된 모든 요소들를 선택한다.
//   :selected: option 요소 중에서 선택된 모든 요소들를 선택한다.
//   :focus: 현재 포커스를 가지고 있는 요소를 선택한다.
//   :disabled: 비활성화 되어있는 모든 요소를 선택한다.
//   :enabled: 활성화 되어있는 모든 요소를 선택한다.


function choice() {
	/*
//javascript	
//	전체 선택
//	let inputs = document.getElementsByTagName('input');
//	let inputs = document.querySelectorAll('input');
//	console.log(inputs.length);

//	개별 선택
	let input = document.getElementsByTagName('input')[0];
	console.log(input.value);
	input.value = '임꺽정';
	*/
	
//	javascript는 value 속성을 사용해서 '~~~~value' 형태로 값을 얻어오고 '~~~~value = 값' 형태로
//	넣어준다.			
//	jQuery는 value 속성을 사용하지 않고 val() 함수를 사용해서 '~~~~val()' 형태로 값을 얻어오고
//	'~~~~val(값)' 형태로 값을 넣어준다.

//jQuery
//	전체 선택
//	let inputs = $('input'); // input 태그 전체를 얻어온다.
//	console.log(inputs.length); // 7
	
//	let inputs = $('input[type=text]'); // input 태그 중에서 type 속성이 text인 태그 전체를 얻어온다.
//	console.log(inputs.length); // 2
	
	let inputs = $('input:text'); // input 태그 중에서 text인 속성값을 얻어온다.
//	console.log(inputs.length); // 2
	
//	아래와 같이 시행하면 input 태그의 type 속성이 text인 요소가 여러개 있더라도 첫번째 요소의 값만 
//	얻어온다.	
//	let doc = $('input:text').val();
//	console.log(doc); // 1
	
	console.log(inputs);	
//	배열의 인덱스 지정이 안된 상태에서 value를 사용하면 undefined가 리턴된다. 	
//	value는 javascript에서, val()는 jQuery에서 사용해야 한다.
	console.log(inputs.value); // undefined
	console.log(inputs[0].value); 
	console.log(inputs[1].value); 
	console.log('---------------');
	
	let text = $('input:text').eq(0);
	console.log(text.value); // undefined  
	console.log(text.val());
	
	text.value = '장길산';
	text.val('일지매');
	console.log('---------------');
	
	$('input:text').eq(0).val('박상아'); // ★
}


function choice2() {
	/*
	let input = document.getElementsByTagName('input')[3];	
//	console.log(input.value);
	
//	document.getElementsByTagName('div')[0].innerHTML = '<h1>'+ input.value + '</h1>';
//	document.getElementById('a').innerHTML = '<h1>'+ input.value + '</h1>';
	document.querySelectorAll('div')[0].innerHTML= '<h1>'+ input.value + '</h1>';
	*/
	
//	let text = $('input:radio').val();
	let text = $('input:radio').eq(0).val();
	console.log(text);
	
//	javascript는 innerHTML, innerText, textContent()를 사용해서 태그 내부에 텍스트를 넣는다.
//	jQuery는 innerHTML 역할을 하는 html() 함수나, innerText, textContent() 역할을 하는 text()함수로
//	태그 내부에 텍스트를 넣어준다.
//	html() 함수는 태그를 지원하고 text()함수는 태그를 지원하지 않는다.
//	$('div').eq(0).html('<h1>'+ text + '</h1>');
//	$('div:eq(0)').html('<h1>'+ text + '</h1>');
	$('#a').eq(0).html('<h1>'+ text + '</h1>');
	
}


function choice3() {
	
	let text = $('input:checkbox').eq(0).val();
	$('div').eq(0).html('<h1>'+ text + '</h1>');
}

// onload를 걸어 <select> 함수 지정하기 

//	$(document).ready(function () {
//	$().ready(function () {
//	$().ready(() => {
	$(function () {
		/*
	let select = document.getElementsByTagName('select')[0];
//	console.log(select);
	

//	이벤트를연결할객체.이벤트 = function () {
//	이벤트를연결할객체.이벤트 = () => {
	select.onchange = function () {
		console.log(select.selectedIndex); // 몇번째 option이 찍혔는지 인덱스를 1부터 나타냄
		console.log(select.options); // option 목록을 배열의 형태로 얻어온다.
		console.log(select.options[select.selectedIndex]); // 선택된 option을 얻어온다. <option>html</option>
		console.log(select.options[select.selectedIndex].value); // html
		document.getElementsByTagName('input')[0].value = select.options[select.selectedIndex].value; 
		}
		*/

		
//	javascript는 onclick, onchange, onload와 같이 이벤트 이름이 'on'으로 시작하지만 
//	jQuery는 이벤트 이름이 click(), change(), load()로 시작한다. 		

//	이벤트를연결할객체.이벤트함수(function () {})
//	이벤트를연결할객체.이벤트함수(() => {})
	$('select').eq(0).change(function () {
		// console.log('select 태그에서 change() 이벤트가 실행됨');
		// option:selected 는 option 태그 중에서 선택(selected)된 option 태그를 얻어온다. 
		let select = $('select:eq(0) > option:selected').eq(0).val();
		console.log(select);
		// $('input:text').eq(0).val(select);
		$('input:text:eq(0)').val(select);
	});	
	
//	let radio = $('input[name=gender]');
//	console.log(radio.length); // 2
	
	$('input[name=gender]').click(() => {
		$('input:text:eq(1)').val($('input[name=gender]:checked').eq(0).val());
		
	});
});





























