$(() => {
//	input 태그 중에서 type 속성값이 text인 모든 요소를 선택해서 배경색 변경하기
	/*
	let inputs = document.getElementsByTagName('input');
	for(let input of inputs) {
		// getAttribute() 함수는 인수로 지정된 속성의 속성값을 얻어온다.
		if(input.getAttribute('type') == 'text') {
			input.style.backgroundColor = 'pink';
		}
	}
	*/
	
	/*
	let inputs = document.querySelectorAll('input[type=text]');
	console.log(inputs.length); // 4
	for(let input of inputs) {
		input.style.backgroundColor = 'dodgerblue';
	}
	*/
	
//	$('input[type=text]').css('backgroundColor', 'BlueViolet');
	$('input:text').css('backgroundColor', 'lavender');
//------------------------------------------------------------------------------------------------	
//	select 태그의 name 속성값이 email인 요소에서 change 이벤트가 발생되면 선택된 option의 value값을
//	name 속성값이 addr인 텍스트 상자에 넣는다.
	/*
	let email = document.querySelectorAll('select[name=email]')[0];
		// console.log(email);
	email.onchange = () => {
		let emailValue = email.options[email.selectedIndex].value;		
		document.querySelectorAll('input[name=addr]')[0].value = emailValue;
	}
	*/
	
	/*	
	$('select[name=email]').eq(0).change(function () {
		let emailValue = $('select[name=email]:eq(0) > option:selected').eq(0).val();
		// console.log(emailValue);	
		$('input[name=addr]').val(emailValue);
	});	
	*/
	
	$('select[name=email]:eq(0)').change(function() {
		// 콤보 상자는 1번에 1개만 선택되기 때문에 $('select[name=email]:eq(0) > option:selected')와
		// $(this)는 같은 의미로 사용된다.
		// this를 사용하려면 function()으로 적어야 하고 화살표 함수는 사용이 불가하다.
		// let emailValue = $('select[name=email]:eq(0) > option:selected').eq(0).val();
		 let emailValue = $(this).val();
		// console.log(emailValue);	
		   $('input[name=addr]:eq(0)').val(emailValue);
		// $('input:text').eq(3).val(emailValue);

	});	
	
//	체크 박스를 체크(클릭)하면 체크된 목록을 출력한다.

	/*
	let hobby1 = document.getElementsByName('hobbies')[0];
	let hobby2 = document.getElementsByName('hobbies')[1];
//	let hobby3 = document.getElementsByName('hobbies')[2];
	let hobby3 = document.querySelectorAll('input[name=hobbies]')[2];
	
	hobby1.onclick = () => hobbyCheck(); // 각각의 체크박스는 동일한 기능을 수행하므로 함수로 만들어준다.
	hobby2.onclick = () => hobbyCheck(); 
	hobby3.onclick = () => hobbyCheck(); 
	*/
	
	/*
	$('input:checkbox[name=hobbies]').click(() => {
		let msg = [];
		// each(): 선택된 요소들의 index와 요소 자체를 리턴하며 인수로 지정한 함수를 반복 실행한다.
		// each() 함수는 익명 함수로 인수 2개를 넘긴다.
		// each() 함수에 index와 obj 중 필요 없으면 index만 obj만 써서 사용하면 된다.
		// 1번째 인수는 index이고 2번째 인수는 객체이다.
		$('input:checkbox[name=hobbies]:checked').each(function (index, obj) {
			// console.log(`index: ${index}, obj: ${obj}`);
			msg.push($('input:checkbox[name=hobbies]:checked').eq(index).val());
		})
		console.log(msg.length==0 ? '취미 없음': msg.join(', '));
		
	});
	*/
	
	$('input:checkbox[name=hobbies]').click(() => {
		let msg = [];
		$('input:checkbox[name=hobbies]:checked').each(function (_, obj) { 
			// index가 없으면 obj에 index가 들어간다.
			// 인수에 순서상 index가 필요 없으면 index 대신해서 '_'를 넣어줘도 된다.
			// 뒤 obj는 그냥 생략 가능, 앞에 들어오니까 그런거야~~
			// console.log(`obj: ${obj}`);
			msg.push(obj.value);
		})
		console.log(msg.length==0 ? '취미 없음': msg.join(', '));
	});
	
});

function hobbyCheck() {
	// console.log('화이팅');
	/*
	let hobbies = document.getElementsByName('hobbies');
	let msg = '';
	for(let i=0; i<hobbies.length; i++) {
		if(hobbies[i].checked) {
			msg += hobbies[i].value + ' ';
		} 
	} 
	console.log(msg.length==0 ? '취미 없음': msg);
	*/
	
	/*
//	let hobbies = $('input:checkbox');
	let msg =[];
	for(let hobby of hobbies) {
		if(hobby.checked) {
			msg.push(hobby.value);
		}
	}
	*/
	let hobbies = $('input[name=hobbies]:checked');
	let msg =[];
	for(let hobby of hobbies) {
		msg.push(hobby.value);
	}
	
	console.log(msg.length==0 ? '취미 없음': msg.join(', ')); // 배열의 형태로 나오는 것을 []을 빼주는 작업=>join
}









































