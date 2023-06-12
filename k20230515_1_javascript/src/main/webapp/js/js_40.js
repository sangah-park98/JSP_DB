function tableAdd() {
	let form = document.forms[0];
	let values = [form.id.value, form.password.value, form.address.value, form.phoneNo];
	
	for(let i=0; i<values.length; i++) {
		let value = values[i];
		if(value == null || value.trim() == '' || value == undefined) {
			switch(i) {
				case 0: 
					alert('아이디를 입력하세요');
					form.id.value = '';
					form.id.focus();
				return;
				case 1: 
					alert('비밀번호를 입력하세요');
					form.password.value = '';
					form.password.focus();
					return;
				case 2: 
					alert('주소를 입력하세요');
					form.address.value = '';
					form.address.focus();
					return;
				case 3: 
				alert('전화번호를 입력하세요');
					form.phoneNo.value = '';
					form.phoneNo.focus();
					return;
			}
		}
	}	
	// 확인 완료
	let tbody = document.getElementById('addtr');
	tbody.appendChild(createRow(values));
	
	// 사용자 편의
	form.id.value = '';
	form.password.value = '';
	form.address.value = '';
	form.phoneNo.value = '';
	
}

function createRow(values) {
	let tr = document.createElement('tr');
	for(let i=0; i<values.length; i++) {
		let td = document.createElement('td');
		td.innerHTML = values;
		tr.appendChild(td);
	}
	let td = document.createElement('td');
	td.innerHTML = `<input type="button" value="${values[0]} 번 데이터 삭제" onclick="removeCurrent(this)"/>`
	tr.appendChild(td);
	
	return tr; //★
}


function removeCurrent(obj) {
	let tr = obj.parentNode.parentNode;
	let tbody = document.getElementById('addtr');
	tbody.removeChild(tr);
}



function removeAll() {
	
	let id = document.getElementById('addtr');
	id.innerHTML = '';
	
}


function removeLast() {
	let id = document.getElementById('addtr');
	id.removeChild(id.lastChild);
}







