<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<style type="text/css">

.input {
	width: 96%;
	padding: 5px;
}

</style>

<script type="text/javascript" defer="defer" src="./passwordCheck.js"></script>

</head>
<body>


<form action="memberOK2.jsp" method="post" onsubmit="return passwordCheck(this)">
	<table width="500" border="1" cellpadding="5" cellspacing="0" align="center">
		<tr>
			<th colspan="2">회원가입</th>
		</tr>
		<tr>
			<th width="150"><label for="id">아이디</label></th>
			<td width="350">
				<input id="id" class="input" type="text" name="id" placeholder="아이디를 입력하세요"/>
			</td>
		</tr>
		<tr>
			<th><label for="name">이름</label></th>
			<td width="350">
				<input id="name" class="input" type="text" name="name" placeholder="이름을 입력하세요"/>
			</td>
		</tr>
		<tr>
			<th><label for="password">비밀번호</label></th>
			<td>
				<input id="password" class="input" type="password" name="password" placeholder="비밀번호를 입력하세요"/>
			</td>
		</tr>
		<tr>
			<th><label for="repassword">비밀번호 확인</label></th>
			<td>
				<input id="repassword" class="input" type="password" name="repassword" placeholder="비밀번호를 확인하세요"/>
			</td>
		</tr>
		<tr>
			<th><label for="age">나이</label></th>
			<td>
				<input id="age" class="input" type="text" name="age" placeholder="나이를 입력하세요"/>
			</td>
		</tr>
		<tr>
			<th>성별</th>
			<td>
				<input type="radio" name="gender" value="true"/>남자
				<input type="radio" name="gender" value="false" checked="checked"/>여자
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit" value="회원가입"/>
				<input type="reset" value="다시쓰기"/>
			</td>
		</tr>
	</table>
	
	<input type="hidden" name="ip" value="<%=request.getRemoteAddr()%>"/>
	
</form>

</body>
</html>