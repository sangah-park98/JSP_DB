<%@page import="com.tjoeun.useBean.MemberVO"%>
<%@page import="java.lang.reflect.Member"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 이후 넘어온 데이터 받기</title>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
	

	String id = request.getParameter("id");
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	int age = Integer.parseInt(request.getParameter("age")); // 나이를 +1, -1 할 수 있기 때문.. 혹시 모르니까...
	boolean gender = Boolean.parseBoolean(request.getParameter("gender")); // 성별은 나중에 삼항 연산자 사용하여 남,여 선택할 수 있기 때문...(1_myInfoOK)
	
//	접속자 ip 주소를 받는다.
//	1. getRemoteAddr(): 접속자 ip 주소를 얻어온다.
//	String ip = request.getRemoteAddr();

//	2. form에 저장돼서 전송되는 ip 주소를 받을 수 있다.
	String ip = request.getParameter("ip");
//	out.println("접속자 ip: " + ip);

//	MemoVO 클래스 객체를 만들고 member.jsp에서 넘겨받은 데이터를 넣어준다.
	/*
	MemberVO vo = new MemberVO();
	vo.setID(id);
	vo.setName(name);
	vo.setPassword(password);
	vo.setAge(age);
	vo.setGender(gender);
	vo.setIp(ip);
	
	out.println(vo + "<br/>");
	*/
	
	MemberVO vo = new MemberVO(id, name, password, age, gender, ip);
	out.println(vo + "<br/>");
%>

</body>
</html>










