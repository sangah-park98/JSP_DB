<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>useBean을 이용한 jsp 액션 태그</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");
%>

	<jsp:useBean id="vo" class="com.tjoeun.useBean.MemberVO">
	<jsp:setProperty property="*" name="vo"/>	
	</jsp:useBean>
	${vo}<br/>
</body>
</html>