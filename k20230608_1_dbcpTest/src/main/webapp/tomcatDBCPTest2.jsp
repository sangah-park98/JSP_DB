<%@page import="com.tjoeun.dbcpTest.DBUtill"%>
<%@page import="javax.sql.DataSource"%>
<%@page import="javax.naming.InitialContext"%>
<%@page import="javax.naming.Context"%>
<%@page import="java.sql.SQLException"%>
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

	Connection conn = DBUtill.getCommonsDConnection();
	out.println("연결 성공: " + conn + "<br/>");
	DBUtill.close(conn);

%>

</body>
</html>