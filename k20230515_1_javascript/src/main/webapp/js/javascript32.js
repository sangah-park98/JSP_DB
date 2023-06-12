function allCheck() {
//	name 속성이 all인 체크 박스에 체크하면 true, 해제하면 false인 상태를 변수에 저장한다.
//	radio 버튼이나 checkbox의 checked 속성은 선택되면 true, 해제되면 false를 얻어온다.
	let check = document.getElementsByName('all')[0].checked;
//	console.log(check);
	
//	name 속성이 chk인 모든 체크 박스를 얻어온다.	
	let checkBoxs = document.getElementsByName('chk'); // 배열로 얻어온다.
	
//	name 속성값이 chk인 체크 박스의 개수만큼 반복하며 일괄적으로 선택 또는 해제시킨다.	
	for(let checkBox of checkBoxs) {
		checkBox.checked = check;
	}
}

function chkSelect() {
// 1.
	/* 
//	name 속성이 chk인 모든 체크 박스를 얻어온다.	
	let checkBoxs = document.getElementsByName('chk');
//	console.log(checkBoxs);
	
//	빨강, 파랑, 노랑, 검정 체크 박스가 모두 체크되었나 검사한다.	
	let count = 0; // 체크된 체크 박스의 개수를 기억할 변수 선언
	for(let checkBox of checkBoxs) {
		console.log(checkBox.checked); // 예> 빨강 선택하면 true 1, false 3
		if(checkBox.checked) {
			count++;
		}
	}	
//	console.log(count); // 몇 개가 체크되었는지 개수로 확인 가능

//	빨강, 파랑, 노랑, 검정 체크 박스가 모두 체크되었다면 전체 선택 체크 박스에 체크하고 한 개라도
//	체크가 안되었으면 전체 선택 체크 박스의 체크를 해제한다.
	if(count == checkBoxs.length) { // 모두 체크되었는지(count == 4)
		document.getElementsByName('all')[0].checked = true; // 전체 선택 체크
	} else {
		document.getElementsByName('all')[0].checked = false; // 전체 선택 해제
	}
	*/
	
// 2.
	let checkBoxs = document.getElementsByName('chk');
	let flag = true;
	
	for(let checkBox of checkBoxs) {
		// 각각의 체크 박스가 체크되었나 검사해서 한 개라도 체크가 안되어있으면 flag를 false로 변경한다.
		if(!checkBox.checked) {
			flag = false;
			// 각각의 체크 박스 중에서 한 개라도 체크가 안되어있으면 나머지는 비교할 필요가 없다.
			break;
		}
	}	
	
	document.getElementsByName('all')[0].checked = flag;
}


function selectColor() {
	let checkBoxs = document.getElementsByName('chk');
	for(let checkBox of checkBoxs) {
		if(checkBox.checked) {
			// 선택된 체크 박스의 배경색과 글자색을 변경한다.
			// console.log(checkBox.value + '선택')
			document.getElementById(checkBox.value).style.backgroundColor = checkBox.value; 
		} else {
			// 선택이 해제된 체크 박스의 배경색과 글자색을 원래대로 되돌린다.
			// console.log(checkBox.value + '해제')
			// document.getElementById(checkBox.value).style.backgroundColor = 'white'; 
			   document.querySelector('#' + checkBox.value).style.backgroundColor = 'white'; 
			
		}
	}
}


function clearColor() {
	/*
	let divs = document.getElementsByTagName('div');
	for(i=1; i<divs.length; i++) { // divs의 끝까지 구할 땐 .length 사용
		divs[i].style.backgroundColor = 'white';
		divs[i].style.color = 'black';
	}
	*/
	
	let divs = document.querySelectorAll('#colorBox > div');
	for(let div of divs) {
			div.style.backgroundColor = 'white';
			div.style.color = 'black';
	}	
//	전체 선택 체크 박스를 해제하고, 모든 체크 박스를 해제하는 함수를 실행한다.
	document.getElementsByName('all')[0].checked = false;
	allCheck();
}


























