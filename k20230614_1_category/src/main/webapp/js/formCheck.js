function mainFormCheck(obj) { // obj로 form 전체가 들어온다.
	
	if(!obj.category.value || obj.category.value.trim().length == 0) {
		alert('메인 카테고리는 반드시 입력해야 합니다.');
		obj.category.value = '';
		obj.category.focus();
		return false;
	} 
	return true;
}

function subFormCheck(obj) { 
	
	if(!obj.category.value || obj.category.value.trim().length == 0) {
		alert('서브 카테고리는 반드시 입력해야 합니다.');
		obj.category.value = '';
		obj.category.focus();
		return false;
	} 
	return true;
}

/*
$(function () {
	alert('jQuery load');
});
*/
$(() => {
//	메인 카테고리에 아무것도 입력되지 않았나 검사한다.
//	메인 카테고리를 입력하는 form은 1개만 있기 때문에 id를 지정해서 처리한다.
//	$('#form').submit(function (event) {} ) 
//	=> form이라는 id 속성이 지정된 form에서 submit 버튼이 클릭되면 submit() 함수의 인수로 지정한 익명 함수가 실행된다.
//	=> 이때 익명 함수의 인수(event)로 실행되는 이벤트가 넘어온다.
	$('#form').submit(function (event) {
		// alert('메인 폼에서 submit 버튼이 클릭됨');
		// alert($('#category').val());
		// $.trim(): 인수로 지정된 문자열 앞, 뒤의 불필요한 빈칸을 제거한다.
		// alert($.trim($('#category').val()).length);
		let category = $.trim($('#category').val()).length; // 메인 카테고리 박스에 입력한 글자수
		if(category == 0) {
			alert('메인 카테고리는 반드시 입력해야 합니다.');
			// 유효성 검사를 실행했는데 규칙에 위배되므로 action 페이지로 넘겨주는 submit 이벤트의
			// 기본(default) 동작을 중지시킨다.
			event.preventDefault(); // event로 넘어온 이벤트 실행을 강제로 중지시킨다. (action 페이지로 넘어가는 것을 막는다.) 
			
			// category라는 id 속성이 지정된 텍스트 박스의 내용을 지운다.
			$('#category').val(''); // $('#form')[0].reset();
			// category라는 id 속성이 지정된 텍스트 박스로 포커스를 옮겨준다.
			$('#category').focus();
		} 
	});
	
//	서브 카테고리에 아무것도 입력되지 않았나 검사한다.
//	서브 카테고리 입력 form은 여러개가 있기 때문에 class를 지정해서 처리한다.
//	서브 카테고리를 입력하는 폼의 개수만큼 반복하며 모든 서브 카테고리 폼에 name 속성을 다르게 지정한다.		

//	sub_form 이라는 class 속성이 지정된 폼의 개수만큼 each() 함수의 인수로 지정한 익명 함수가 반복돼서
//	실행된다.
//	each() 함수는 익명 함수로 두 개의 인수를 넘기는데 첫번째 인수는 선택된 객체의 인덱스, 
//	두번째 인수는 선택된 객체들 중에서 인덱스번째 객체가 넘어간다.

	$('.sub_form').each(function (index, item) {
		// console.log(index, item);
		// addClass() 함수로 each() 함수를 통해서 반복되는 객체(서브 카테고리 폼)에 class 속성을
		// 추가한다.
		$(item).addClass('sub_form' + index);
	});
	
//	서브 카테고리를 입력하는 텍스트 박스의 개수만큼 반복하며 모든 서브 카테고리를 입력하는 텍스트 박스에
//	이름이 다른 class를 지정한다.
	$('.sub_category').each(function (index, item) {
		$(item).addClass('sub_category' + index);
	});	
	
	$('.sub_form').each(function (index, item) {
		$('.sub_form' + index).submit(function (event) {
			// 서브 카테고리 텍스트 박스에 입력한 글자수
			let sub_category = $.trim($('.sub_category' + index).val()).length;
			if(sub_category == 0) {
				let categoryName =  $.trim($('.sub_form' + index).find('span').text());
				alert(categoryName + ' 서브 카테고리는 반드시 입력해야 합니다.');
				event.preventDefault();
				$('.sub_form' + index)[0].reset();
				$('.sub_form' + index).focus();
			}
		});
	});
});

//	수정 버튼이 클릭되면 update.jsp로 폼에 입력된 데이터를 전송하는 함수
function mySubmitUpdate(obj) {
	if(!obj.category.value || obj.category.value.trim().length == 0) {
		alert('수정할 카테고리를 입력하세요.');
		obj.category.value = '';
		obj.category.focus();
	} else {
		// 인수로 넘어온 폼의 action 페이지를 변경한다.
		obj.action = 'update.jsp';
		// action 페이지를 호출하고 폼의 데이터를 전송한다.
		obj.submit(); // submit 버튼 클릭한 것
	}
}


function mySubmitDelete(obj) {
	obj.action = 'delete.jsp';
	obj.submit(); 
}

function mySubmitRestore(obj) {
	obj.action = 'restore.jsp';
	obj.submit(); 
}


function mySubmitReport(obj) {
	obj.action = 'report.jsp';
	obj.submit(); 
}















