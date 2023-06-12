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
	
//	Date date = new Date();
//	out.println(date + "<br/>");
%>

<!--  
	useBean 액션 태그로 new를 사용하지 않고 객체를 만들 수 있다.
	id 속성에는 만들려는 객체의 이름을 입력한다.
	class 속성에는 객체를 만드려는 클래스 이름(반드시 풀패키지 이름으로)을 입력한다.
	useBean 액션 태그는 필드를 따로 만들어 집어 넣을 데이터를 선언하지 않아도 useBean이 자동으로 데이터를 만들어준다.
-->

<jsp:useBean id="date" class="java.util.Date"></jsp:useBean>
<%-- <jsp:useBean id="date" class="java.util.Date"/>와 같다. --%>
${date}<br/>

<!-- MemberVO vo = new MemberVO(); 를 useBean을 이용하여 만들 수 있다. -->
<jsp:useBean id="vo" class="com.tjoeun.useBean.MemberVO">

	<!-- 
		setter 메소드를 실행한다. 
		setProperty 액션 태그는 지정한 필드의 setter 메소드를 실행한다. (VO클래스의 setter가 있어야 사용 가능)
		property 속성에는 setter 메소드를 실행할 필드 이름을 입력한다.
	-->
	
	<!--
	<jsp:setProperty property="id" name="vo"/>
	<jsp:setProperty property="password" name="vo"/>
	<jsp:setProperty property="name" name="vo"/>
	<jsp:setProperty property="age" name="vo"/>
	<jsp:setProperty property="gender" name="vo"/>
	<jsp:setProperty property="ip" name="vo"/>
	-->
	
	<!--  
		property 속성에 "*"을 입력하면 모든 필드의 setter 메소드가 일괄적으로 실행된다.
		단, form의 name 속성의 속성값과 같은 이름을 가지는 필드의 setter 메소드만 실행된다.
	--> 	
	<jsp:setProperty property="*" name="vo"/>
	
</jsp:useBean>
${vo}<br/>

</body>
</html>