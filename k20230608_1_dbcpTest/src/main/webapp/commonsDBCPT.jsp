<%@page import="java.sql.DriverManager"%>
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
//	lib 폴더에 commonsDBCP 드라이버 클래스를 복사해 넣는다.
//	src/main/java에 *.jocl 파일을 작성한다. => pool.jocl 파일을 복사해 넣는다. => 데이터베이스 연결 정보

//	mysql 5.x
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:mysql://localhost:3306/javaam?useUnicode=true&amp;characterEncoding=UTF-8"/>
//		<string value="root"/>
//		<string value="0000"/>
//	</object>

//	mysql 8.x
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:mysql://localhost:3306/javaam?serverTimeZone=UTC"/>
//		<string value="root"/>
//		<string value="0000"/>
//	</object>

//	oracle
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:oracle:thin:@localhost:1521:xe"/>
//		<string value="tjoeunit"/>
//		<string value="0000"/>
//	</object>

	Connection conn = null;
	try {
		Class.forName("com.mysql.jdbc.Driver"); // mysql 5.x
		//	Class.forName("com.mysql.cj.jdbc.Driver"); // mysql 8.x
	
		// Class.forName("oracle.jdbc.driver.OracleDriver"); // oracle
		Class.forName("org.apache.commons.dbcp.PoolingDriver"); // commonsDBCP
		String url = "jdbc:apache:commons:dbcp:/pool";
		conn = DriverManager.getConnection(url);
		
		out.println("연결 성공: " + conn + "<br/>");
		
	} catch(ClassNotFoundException e) {
		out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
	} catch (Exception e) {
		out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
	} finally {
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();				
			}
		}
	}


%>

</body>
</html>