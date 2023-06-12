$(() => {
//	input 태그 중에서 type 속성값이 text인 모든 요소를 선택해서 배경색 변경하기
	
	let inputs = document.getElementsByTagName('input');
	for(let input of inputs) {
		if(input.getAttribute('type') == 'text') {
	 // if(input.getAttribute('type') == 'text)	
			input.style.backgroundColor = 'pink';
			
		}
	}
	
	$('input:text').css('backgroundColor', 'pink');
	
	let email = document.querySelectorAll('select[name=email]')[0];
	email.onchange = () => {
		let emailValue = email.options[email.selectedIndex].value;
		document.querySelectorAll('input[name=addr]')[0].value = emailValue;
	};
		
	
	$('select[name=email]').eq(0).click(function() {
		
		let emailValue = $(this).val();
		 $('input:text').eq(3).val(emailValue);
		
	});
	
/*	
$('input[name=hobbies]').click(function () {
		let msg = [];
		$('input:checkbox[name=hobbies]:checked').each(function(index, obj) {
			msg.push($('input:checkbox[name=hobbies]:checked').eq(index).val());
		});
			console.log(msg.length==0 ? '취미없음': msg.join(', '));
	});
*/
	
	$('input:checkbox[name=hobbies]').click(function() {
		
		let msg = [];
		$('input:checkbox[name=hobbies]:checked').each(function(_, obj) {
			msg.push(obj.value);
		})
		console.log(msg.length ==0 ? '취미없음' : msg.join(', '));
	});
	
	
	
	
	
	
});