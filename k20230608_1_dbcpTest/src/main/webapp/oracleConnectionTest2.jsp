<%@page import="com.tjoeun.dbcpTest.DBUtill"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
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
	Connection conn = DBUtill.getOracleConnection();
	out.println("연결성공: " + conn + "<br/>");
	DBUtill.close(conn);
%>

</body>
</html>