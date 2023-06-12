<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주민등록번호 유효성 검사</title>
<script defer="defer" type="text/javascript" src="./js/juminForm.js"></script>
<style type="text/css">

#jumin {

	padding: 10px;
	width: 130px;
}

</style>
</head>
<body>

<!--  
	
	onsubmit 이벤트는 form의 submit 버튼이 클릭되면 실행되는 이벤트이다.
	form check는 submit 버튼이 클릭되면 실행되는 onsubmit 이벤트에서 javascript 함수를 실행해서
	form에 입력된 데이터가 정상적인 데이터인가 유효성 검사를 해서 정상이면 true, 오류가 나면 
	false를 리턴한다. => 기본값은 true
	onsubmit="return javascript함수(this)" 형태로 코딩하며 javascript함수(obj)의 형태로 넘어오는
	인수를 받아야 한다.
	
-->

<form action="juminFormOK.jsp" method="post" name="juminForm" onsubmit="return formCheck(this)">
	<input id="jumin" type="text" name="j1" maxlength="6" placeholder="주민등록번호 앞자리"
		onkeyup="moveNext(this, 6, document.juminForm.j2)"/>
	-
	<input id="jumin" type="text" name="j2" maxlength="7" placeholder="주민등록번호 뒷자리"
		onkeyup="moveNext(this, 7, document.juminForm.sendBtn)"/>
	<input type="submit" name="sendBtn" value="검사하기"/>
</form>


</body>
</html>