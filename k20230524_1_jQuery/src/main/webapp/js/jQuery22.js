$(() => {
	
	$('#emp_search').click(function () {
		//	조회할 사원 번호를 얻어온다.
		let empid = $('input:text[name=empid]').val(); // v
		console.log(empid);
		//	3자리 숫자만 입력받는다.
		//	isNaN(): 인수로 지정된 내용이 숫자가 아니면 true, 숫자면 false를 리턴한다.
			if(!isNaN(empid) && empid.length == 3) {
		// var pattern = /^\d{3}$/;
		// if (pattern.test(empid)) {
//		-----jQuery Ajax-------------------------------------------------------------

			$.ajax({
				url: 'emplist.xml', // 필수, 호출할 페이지 주소(요청) 또는 읽어올 xml 파일명	
				cache: false, // 사용자 캐시 사용 여부 ▲
				method: 'get', // 필수, 서버에 요청하는 방식(정보 입력: post, 정보 조회: get)
				asyn: true, // 필수, 비동기 방식 사용 여부(false는 동기 방식)
				dataType: 'xml', // 전송받는 데이터 타입(xml, json, html, script) ▲
				data: { // method가 post로 지정된 경우 서버로 전송할 데이터 목록
					'key':'value'
				},
				// success는 Ajax 요청이 성공했을 때 실행할 콜백 함수
				// Ajax 요청이 성공하면 응답받는 데이터가 콜백 함수의 인수로 넘어온다.
				// success: function (data) {} // 필수
				success: data => {
					// console.log('요청 성공');
					// console.log(data); // ▶document 모든 내용 출력
					
					// 입력한 사원 번호에 해당되는 데이터를 출력해야 하기 때문에 검색한 사원 번호의
					// 부모 요소를 선택한다.
					// $(data).find('EMPLOYEE_ID:contains(' + empid + ')'): 서버가 응답한 내용에서 
					// 입력한 사원 번호를 찾는다.
					let empInfo = $(data).find('EMPLOYEE_ID:contains(' + empid + ')').parent(); // <ROW> 태그
					// console.log(empInfo.html());
					// 검색한 사원 번호에 해당되는 데이터가 있으면 테이블에 출력한다.
					// 검색된 사원 번호의 부모는 <ROW> 이므로 검색된 내용에 'ROW'가 있으면 테이블에
					// 데이터를 출력하고 없으면 에러 메시지를 출력한다.
					if($(empInfo).is('ROW')) {
						// console.log('있어');
						// table 태그의 자손인 input 태그의 개수만큼 반복하며 xml 파일에서 읽어온
						// 데이터를 채워 넣는다.
						$('table input').each(function (index, obj) {
							// console.log(index, obj); // <table> 전체 데이터가 예쁘게 다 나온다.
							let search = $(empInfo).children().eq(index).text(); // <ROW> 태그의 모든 자식들의 인덱스를 돌려서 안의 데이터값만 얻어오겠다.
							// console.log(search);
							// obj.value = search; // javascript
							$('table input').eq(index).val(search); // jQuery
						});
					} else {
						// console.log('없어');
						console.log(empid + '번은 존재하지 않는 사원 번호입니다.');
						
					}
				},
				// error는 Ajax 요청이 실패했을 때 실행할 콜백 함수
				// Ajax 요청이 실패하면 콜백 함수의 인수로 오류 정보가 넘어온다.
				// error: function(e) {}
				error: e => {
					// console.log('요청 실패');
					console.log(e.status); // 404(파일 없음)
					console.log(e.status + ': ' + e.statusText); // 404(파일 없음), 404: error
				}
			});
			
//		-----jQuery Ajax-------------------------------------------------------------
			
		} else {
			alert('정확한 사원 번호를 입력하세요.');
			$('input:text[name=empid]').val(''); 
			$('input:text[name=empid]').focus(); 
		}		
	});
});