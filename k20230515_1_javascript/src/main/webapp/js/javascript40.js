function tableAdd() {
//   데이터가 입력된 form 얻어와서 form에 입력된 데이터를 배열에 저장한다.
//   let form = document.getElementsByTagName('form')[0];
//   console.log(form);
//   forms: 현재 문서의 form을 배열 형태로 저장하고 있는 자바스크립트 내장 객체
   let form = document.forms[0];
   
//   form객체가 저장된 변수.name속성값.value: form에서 지정된 name 속성을 가지는 요소의 입력된 값을 얻어올 수 있다.
//   console.log('id: ' + form.id.value);
//   console.log('password: ' + form.password.value);
//   console.log('address: ' + form.address.value);
//   console.log('phoneNo: ' + form.phoneNo.value);

   let values = [form.id.value, form.password.value, form.address.value, form.phoneNo.value]
//   console.log(values);

//   form에 데이터가 모두 입력되었나 확인한다.
   for (let i=0; i<values.length; i++) {
      let value = values[i];
      if(value == null || value.trim() == '' || value == undefined) {
         switch (i) {
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
//   배열에 저장된 데이터를 id속성이 table인 테이블에 추가한다.
//   <tbody> 태그를 얻어온다.
   let tbody = document.getElementById('addtr');
//   배열에 저장된 데이터를 사용해서 <tbody>태그에 추가할 행<tr>태그를 만드는 함수를 실행한다.

//   티바디 태그에 행(함수가 리턴한 결과를 추가한다.)
   tbody.appendChild(createRow(values));
   
   
//   테이블에 데이터를 추가한 후 다음 데이터를 입력받기 위해 텍스트 상자의 내용을 모두 제거한다.
   form.id.value = '';
   form.password.value = '';
   form.address.value = '';
   form.phoneNo.value = '';
//   아이디 텍스트 상자로 포커스를 이동시킨다.
   form.id.focus();
}

//	tableAdd()에서 호출되는 value데이터를 넘겨받아 <tr>태그를 만들어서 리턴하는 함수
function createRow(values) {
   console.log(values);
   let tr = document.createElement('tr');
	//	열 만들기 (인수로 넘어온 values의 길이만큼 반복 돌려서)
   for (let value of values) {
      let td = document.createElement('td');
      //  <td> 태그에 데이터 넣기
      td.innerHTML = value;
      //  <td> 태그를 <tr>태그에 넣기
      tr.appendChild(td);
   }
   
//	현재 데이터를 삭제하는 버튼 <td>태그에 만들어서 <tr>태그에 추가
   let td = document.createElement('td'); // 위에서 만든 td는 {} 안에 있어서 소멸되므로 다시 써준다.
   td.innerHTML = `<input type="button" value="${values[0]} 데이터 삭제" onclick="removeCurrent(this)">`
   tr.appendChild(td);
   
   return tr;
}

function removeAll() {
   document.getElementById('addtr').innerHTML = ' ';
}

function removeLast() {
   let id = document.getElementById('addtr');
   id.removeChild(id.lastChild);
}

function removeCurrent(obj) {
//  let tbody = document.getElementById('addtr');
//  tbody.removeChild(tbody);
//	console.log(obj.parentNode.parentNode); // <tr> ~ </tr>

//	삭제할 <tr> 태그를 선택한다.
	let tr = obj.parentNode.parentNode; 
//	<tbody> 태그의 자식인 선택된 <tr> 태그를 제거한다.	
   	let tbody = document.getElementById('addtr');
	tbody.removeChild(tr);	
   
}










