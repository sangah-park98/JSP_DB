function requestID() {
//	alert('온로드');
//	opener는 현재 창을 띄운 부모창을 의미한다. 19번창
//	부모창에서 자식창에 사용할 데이터를 얻어온다.
	let parentID = opener.document.getElementById('parentID').value;
	console.log(parentID);
//	부모창에서 얻어온 데이터를 자식창의 객체에 넣어준다.
	document.getElementById('childID').value = parentID;
}

function sendID1() {
//	부모창으로 넘겨줄 자식창의 데이터를 가져온다.
	let childID = document.getElementById('childID').value;
	console.log(childID);
//	부모창으로 데이터를 보낸다.
	opener.document.getElementById('requestID').value = childID;
}

function sendID2() {
//	부모창으로 넘겨줄 자식창의 데이터를 가져온다.
	let childID = document.getElementById('childID').value;
	console.log(childID);
//	부모창으로 데이터를 보낸다.
	opener.document.getElementById('requestID').value = childID;
	
//	id가 아닌 name 속성이나 tag 이름으로 객체를 얻어오려면 id는 무조건 1개만 나올 수 있으므로
//	Element처럼 단수형을 사용하고 name 속성이나 tag 이름은 같은 것이 여러 개 나올 수 있으므로
//	Elements 처럼 복수형을 사용한다.
//	getElementById() 함수는 1개만 얻어오기 때문에 그냥 사용하면 되지만
//	getElementsByName(), getElementsByTagName(), getElementsByClassName() 함수는 여러개를 배열로 얻어오기 때문에 
//	그냥 사용하면 안되고 인덱스를 지정해서 사용해야 한다.
	
//	getElementsByName(): 인수로 지정된 name 속성을 가지는 객체들을 얻어온다.
	opener.document.getElementsByName('requestID')[0].value = childID;
//	getElementsByTagName: 인수로 지정된 Tag 객체들을 얻어온다.
	opener.document.getElementsByTagName('input')[4].value = childID;
//	getElementsByClassName: 인수로 지정된 class 속성을 가지는 객체들을 얻어온다.
	opener.document.getElementsByClassName('requestID')[0].value = childID;
//	getElementsByTagName: 인수로 지정된 Tag 객체들을 얻어온다.
	opener.document.getElementsByTagName('h1')[1].innerHTML = 
		'<marquee style="color: red">' + childID + '</marquee>';
	
//	자식창의 데이터를 부모창으로 전송한 후 자식창을 닫는다.
	self.close(); 
}