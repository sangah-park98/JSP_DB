$(() => {
//	class 속성값이 error로 지정된 에러 메시지를 숨긴다.
	$('.error').hide();
	
//	id 속성값이 single로 지정된 form에서 submit 클릭되면 실행할 이벤트를 설정한다.
//	submit 이벤트는 input 태그나 button 태그의 type 속성값이 submit인 버튼이 클릭되면 발생되는 이벤트이다.
//	jQuery는 submit이고 html 이나 javascript에서는 onsubmit 이다.
//	submit 이벤트에서는 서버로 전송하기 전에 폼의 유효성을 검사하고 입력된 데이터가 이상이 없으면 true를
//	리턴시키고 이상이 있으면 에러 메시지를 출력한 후 false를 리턴시킨다.
//	submit 이벤트의 실행 결과가 true(기본값)면 action 속성에 지정된 페이지로 이동하고 실행 결과가 false면
//	현재 페이지를 표시한다.
	
	$('#single').submit(function () {
		// console.log('submit 이벤트 실행됨');
		// let userID = $('input:text[name=userID]').val().trim();
		let userID = $('#infoBox').val().trim();
		// console.log(userID);
		if (userID == null || userID == '') { // 유효성 검사
			$('#infoBox').val('');
			$('#infoBox').focus();
			$('.error').show(); // 감춰둔 에러 메시지를 표시한다.
			return false; // false를 리턴시키면 현재 페이지에 그대로 머물러있는다.
		}
		return true; // true를 리턴시키면 action 속성에 지정된 페이지로 이동한다.
	});
	
//	전체 선택 체크 박스가 클릭되면 모든 체크 박스를 선택 또는 해제한다.
	$('input:checkbox[name=all]').click(function () {
		// console.log('전체 선택 체크 박스 클릭');
		// prop('속성이름'): 인수로 지정된 속성의 프로퍼티를 얻어온다.
		let checked = $('input:checkbox[name=all]').prop('checked');
		// console.log(checked);
		
		// name 속성이 chk인 체크 박스의 프로퍼티를 name 속성이 all인 체크 박스의 프로퍼티로 변경한다.
		// prop('속성이름', 프로퍼티): 인수로 지정된 속성의 프로퍼티를 변경한다.
		
		/*
		$('input:checkbox[name=chk]').each(function (index) {
			// console.log(index);
			$('input:checkbox[name=chk]').eq(index).prop('checked', checked);
		});
		*/
		/*
		$('input:checkbox[name=chk]').each(index => {
			$('input:checkbox[name=chk]').eq(index).prop('checked', checked);
		});
		*/
		/*
		$('input:checkbox[name=chk]').each(function () {
			console.log($(this));
			$(this).prop('checked', checked);
		});
		*/
		$('input:checkbox[name=chk]').prop('checked', checked);
	});
	
//	name 속성이 chk인 체크 박스가 클릭되면 name 속성이 chk인 모든 체크 박스가 체크되었나 검사해서
//	모두 체크되었으면 전체 선택 체크 박스를 체크하고 그렇지 않으면 체크를 해제한다.
	$('input:checkbox[name=chk]').click(function () {
		// console.log('name 속성값이 chk인 체크 박스 클릭');
		// name 속성이 chk인 요소의 전체 개수와 name이 chk인 요소 중에서 체크된 요소의 개수를 비교한다.
		// console.log('name 속성이 chk인 요소의 전체 개수: ' + $('input:checkbox[name=chk]').length);
		// console.log('name 속성이 chk인 요소 중에서 체크된 요소의 개수: ' + 
		//  	$('input:checkbox[name=chk]:checked').length);
		if ($('input:checkbox[name=chk]').length == $('input:checkbox[name=chk]:checked').length) {
			// console.log('모두 체크됨');
			$('input:checkbox[name=all]').prop('checked', true);
		} else {
			// console.log('모두 체크되지 않음');
			$('input:checkbox[name=all]').prop('checked', false);
		}
	});
	
//	체크 박스를 선택하고 확인 버튼을 클릭하면 체크 여부를 확인해서 그 결과를 id 속성이 result로 지정된
//	div 태그 내부에 출력한다.
	/*
	$('#confirm').click(function () {
		let check = $('input:checkbox[name=chk]');
		let values = [check.eq(0).attr('value'), check.eq(1).attr('value'), check.eq(2).attr('value'), check.eq(3).attr('value')];
		// console.log(values); // (4) ['1000', '2000', '3000', '4000']
		let chks = [check.eq(0).prop('checked'), check.eq(1).prop('checked'), check.eq(2).prop('checked'), check.eq(3).prop('checked')];
		// console.log(chks); // false 
		let results = [];
		for(let i=0; i<=chks.length; i++) {
			if(chks[i] == true) {
				results.push(values[i]);
			}
		}
	
		$('#result').html(`선택한 과일의 금액: ${results}`);
	});
	*/	
	
	$('#confirm').click(function () {
		// console.log('확인 버튼 click 이벤트 실행');
		// 선택한 과일 가격이 표시될 div 태그 내부의 내용을 지운다.
		   $('#result').html(' ');
		// $('#result').empty(); // empty(): 선택된 요소의 내부 내용을 지운다.
		// append()는 과일을 여러 개 선택하면 지워지지 않고 전부 다 나오게 하기 위함이다.
		// name 속성에 chk가 지정된 체크 박스의 체크된 항목의 개수를 얻어온다.
		let chks = $('input:checkbox[name=chk]:checked');
		let count = chks.length;
		// console.log(count);
		if(count == 0) {
			$('#result').html('<b style="color:red">과일을 먼저 선택해 주세요.</b>');
		} else {
			chks.each(function (index) {
				let chk = chks.eq(index);
				// console.log(chks.eq(index)); - [input, prevObject: jQuery.fn.init(1)]
				console.log(chk.val()); // 과일 가격
				console.log(chk.html()); // 아무것도 안 나온다. html()은 시작과 끝이 있는 태그에서만 사용, <input>은 끝이 X
				console.log(chk.next()); // <input type="checkbox" ~의 형제인 <span> 태그를 선택한다.
				console.log(chk.next().html()); // 쓰여져 있는 값을 가져올 때 html(); 이렇게 써야 과일 이름이 나온다.
				// $('#result').html(`과일 이름: ${chk.next().html()}, 과일 가격: ${chk.val()}<br/>`);
				// append(): html() 함수나 text() 함수를 사용하면 기존 내용을 지우고 인수로 지정한 내용을 넣어주지만
				//           append() 함수는 기존의 내용에 추가해서 들어간다.           
				$('#result').append(`과일 이름: ${chk.next().html()} / 과일 가격: ${chk.val()}원<br/>`);
			});
		}
	});
	
//	형제(sibling) 요소 탐색 	
//   .siblings() : 선택된 요소의 형제 요소 중에서 지정한 선택자에 해당되는 모든 요소를 선택한다.
//   .next() : 선택된 요소 바로 다음에 위치한 형제 요소 1개를 선택한다.
//   .nextAll() : 선택된 요소 바로 다음에 위치한 형제 요소를 모두 선택한다.
//   .nextUntil() : 선택된 요소 바로 다음에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 
//                  바로 이전까지의 요소를 모두 선택한다.
//   .prev() : 선택된 요소 바로 이전에 위치한 형제 요소 1개를 선택한다.
//   .prevAll() : 선택된 요소 바로 이전에 위치한 형제 요소를 모두 선택한다.
//   .prevUntil() : 선택된 요소 바로 이전에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 
//                  바로 다음까지의 요소를 모두 선택한다.

	
});






