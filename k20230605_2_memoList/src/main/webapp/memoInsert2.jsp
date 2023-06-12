<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Statement"%>
<%@page import="com.tjoeun.memoList.DBUtill"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");
	
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	String memo = request.getParameter("memo");
	String ip = request.getRemoteAddr();	
	
	Connection conn = DBUtill.getMysqlConnection(); // 연결
	String sql = "INSERT INTO memolist(NAME, PASSWORD, memo, ip) VALUES (?, ?, ?, ?)"; // 데이터 삽입
	PreparedStatement pstmt = conn.prepareStatement(sql); // 임시 실행
	
	pstmt.setString(1, name);
	pstmt.setString(2, password);
	pstmt.setString(3, memo);
	pstmt.setString(4, ip);
	
	pstmt.executeUpdate();
	
	DBUtill.close(conn);
	
	response.sendRedirect("memoList.jsp");
	

%>

</body>
</html>











