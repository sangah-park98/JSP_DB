function alertTest() {
//	alert('단순한 메시지');
	alert('단순한 메시지를 출력하는 대화창');
}

function confirmTest() {
//	confirm('질문 메시지');
//	확인 버튼을 클릭하면 true, 취소 버튼을 클릭하면 false가 리턴된다.
	let result = confirm('브라우저 배경색을 바꿀래?');
//	console.log(result);
	if(result) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	} 
}

function promptTest() {
//	prompt('메시지');
//	prompt('메시지', '안내 메시지');
//	확인 버튼을 클릭하면 입력한 메시지, 취소 버튼을 클릭하면 null이 리턴된다.
//	리턴되는 데이터의 타입은 무조건 string 타입으로 리턴된다. => 숫자를 넣고 싶으면 parseInt 형식 사용
	let menu = prompt('점심은 뭐 먹을까요?\n(1.짜장면 2. 양장피 3. 팔보채)', '난 짜장면'); // '안내 메시지'는 placeholder 같은 기능
	console.log(menu);
	console.log(typeof menu);
	
	switch (menu) { // switch (parseInt(menu)) {
		case '1': 
			console.log('짜장면');
			break;
		case '2': 
			console.log('양장피');
			break;
		case '3': 
			console.log('팔보채');
			break;
		default:
			console.log('짜장면, 양장피, 팔보채 중에서 고르세요.');
			break;
	}
}
