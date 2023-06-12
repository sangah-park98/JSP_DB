<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 페이지 삽입</title>
</head>
<body>

<!-- 1. include 디렉티브를 사용해서 중복되는 jsp 코드 삽입하기 -->
<%@ include file="./loginTest.jsp" %>

<hr/>

<!-- 2. include 액션 태그를 사용해서 중복되는 jsp 코드 삽입하기 --> <!-- 권장! -->
<jsp:include page="./loginTest.jsp"></jsp:include>


</body>
</html>