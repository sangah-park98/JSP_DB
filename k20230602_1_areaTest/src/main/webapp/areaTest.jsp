<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP의 시스템 영역</title>
</head>
<body>

<!--  
	jsp에서 사용하는 시스템 영역과 유효 범위
	pageContext => 현재 보고 있는 페이지
	request => 다음 페이지
	session => 전체 사이트 페이지
	application => 서버가 실행되면 생성되고 서버가 종료되면 소멸되는 영역(모든 서버에게 동일한 서비스를 제공할 때)
-->

<%
	String var = "일반 변수";
	out.println("일반 변수: " + var + "<br/>");
	
//	시스템 영역 변수 사용하기	
//	영역이름.setAttribute("영역 변수 이름", 영역 변수에 저장할 데이터)
//	영역 변수가 저장되는 기억 공간은 영역 변수 이름을 key로 하고 영역 변수에 저장되는 데이터를 value로 하는
//	Map<String, Object> 형태의 구조로 value의 자료형이 Object인 이유는 개발자가 어떤 타입의 데이터를 영역 변수
//	에 저장할지 모르기 때문이다.
	pageContext.setAttribute("pageContextVar", "areaTest.jsp의 pageContext 영역 변수");

//	영역 변수에 저장된 데이터는 영역이름.getAttribute("영역 변수 이름")와 같이 얻어온다.
	out.println("pageContext 영역 변수: " + pageContext.getAttribute("pageContextVar") + "<br/>");

	request.setAttribute("requsetVar", "areaTest.jsp의 request 영역 변수");
	session.setAttribute("sessionVar", "areaTest.jsp의 session 영역 변수");
	application.setAttribute("applicationVar", "areaTest.jsp의 application 영역 변수");

	out.println("request 영역 변수: " + request.getAttribute("requsetVar") + "<br/>");
	out.println("session 영역 변수: " + session.getAttribute("sessionVar") + "<br/>");
	out.println("application 영역 변수: " + application.getAttribute("applicationVar") + "<br/>");

//	영역 변수와 영역 변수에 저장하는 데이터가 기억되는 공간은 Map<String, Object> 형태이므로
//	getAttribute() 메소드로 영역 변수에 저장된 데이터를 얻어오면 Object 타입으로 얻어오기 때문에
//	영역 변수에 저장된 데이터는 일반 변수에 저장할 때 일반 변수의 데이터 타입으로 형변환 시켜야 한다.
	String pageContextVar = (String) pageContext.getAttribute("pageContextVar");
	out.println("pageContext 영역 변수: " + pageContextVar + "<br/>");

//	sendRedirect(): 인수로 지정된 페이지로 넘겨준다.
//	sendRedirect() 메소드는 주소창에 표시되는 페이지 이름이 인수로 지정한 페이지 이름으로 변경된다.
//	★★★★★ sendRedirect() 메소드는 request 영역의 데이터를 가지지 않고 ! 인수로 지정된 페이지로 넘어간다. ★★★★★
	response.sendRedirect("requestTest.jsp");

//	forward() 메소드는 주소창에 표시되는 페이지 이름이 forward() 메소드가 실행된 페이지 이름이 그대로
//	forward(): 인수로 지정된 페이지로 넘겨준다.
//	★★★★★ forward() 메소드는 request 영역의 데이터를 가지고 ! 인수로 지정된 페이지로 넘어간다. ★★★★★
//	pageContext.forward("requestTest.jsp");
%>


</body>
</html>
























