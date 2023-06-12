<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.tjoeun.memoList.DBUtill"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판</title>
<style type="text/css">

	tr {
		height: 45px;
	}
	
	a {
		text-decoration: none;
		color: black;
	}
	
	a:hover {
		color: black;
		text-decoration: none;
	}
	
	span {
		color: white;
		background-color: pink;
	}
	
	.button {
	  background-color: pink;
	  border: none;
	  color: white;
	  padding: 2px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 14px;
	  margin: 4px 2px;
	  transition-duration: 0.4s;
	  cursor: pointer;

	}

	.button1 {
	  background-color: white; 
	  color: black; 
	  border: 2px solid white;
	}

	.button1:hover {
	  background-color: pink;
	  color: white;
	}

	.button2 {
	  background-color: pink; 
	  color: black; 
	  border: 2px solid white;
	  cursor: default;
	}
</style>
</head>
<body>

<form action="memoInsert.jsp" method="post">
	<table width="1000" align="center" border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="3">처음 만드는 출석 체크 게시판 ver 0.01</th>
		</tr>
		<tr>
			<th width="100">이름</th>
			<th width="100">비밀번호</th>
			<th width="800">메모</th>
		</tr>
		<tr>
			<td align="center">
				<input type="text" name="name" style="width: 90%; height: 25px;"/>
			</td>
			<td align="center">
				<input type="text" name="password" style="width: 90%; height: 25px;"/>
			</td>
			<td align="center">
				<input type="text" name="memo" style="width: 90%; height: 25px;"/>
				<input type="submit" value="저장" style="height: 28px;"/>
			</td>
		</tr>
	</table>
</form>

<br/>
<hr size="3" color="pink"/>
<br/>

<%
	int pageSize = 10; // 페이지당 표시하려는 글의 개수
	int totalCount = 0; // 테이블에 저장된 전체글의 개수
	int totalPage = 0; // 전체 페이지 개수
	int currentPage = 1; // 현재 브라우저에 표시되는 페이지 번호
	int startNo = 0; // 현재 브라우저에 표시되는 글의 시작 인덱스 번호 => mysql은 인덱스가 0부터 시작
	int endNo = 0; // 현재 브라우저에 표시되는 글의 마지막 인덱스 번호, mysql에서는 사용하지 않는다.
	int startPage = 0; // 페이지 이동 하이퍼링크 또는 버튼에 표시될 시작 페이지 번호
	int endPage = 0; // 페이지 이동 하이퍼링크 또는 버튼에 표시될 마지막 페이지 번호
	
//	-----------------------------------------------------------------------------------------------	
//	페이지당 표시할 글의 개수를 받아 pageSize 변수에 저장한다.
//	게시판이 최초로 실행될 때 이전 페이지가 없으므로 넘어오는 pageSize 값이 null이고 보기 버튼 이외의
//	다른 버튼이 클릭되면 pageSize가 넘어오지 않기 때문에 역시 null이 된다.
	try {
	  	pageSize = Integer.parseInt(request.getParameter("pageSize")); 
		// 화면에 표시할 글의 개수가 정상적으로 넘어왔으므로 화면에 표시할 글의 개수를 세션에 저장한다.
		session.setAttribute("pageSize", pageSize + "");
		
	} catch (NumberFormatException e) {
		// 보기 버튼을 제외한 나머지 버튼은 pageSize를 전달하는 기능이 없기 때문에 NumberFormatException이 
		// 발생돼서 이곳으로 오게 된다.
		// 이전 페이지에서 넘어오는 pageSize이 null이면 세션에 저장해둔 pageSize를 얻어와서 화면에 표시할
		// 글의 개수로 지정한다.
		// 브라우저가 최초로 실행될 때 세션이 만들어지기 때문에 브라우저가 최초로 실행되면 이전 페이지에서
		// 넘어오는 pageSize도 null이고 세션에 저장된 pageSize도 null이다.
		
		String temp = (String) session.getAttribute("pageSize");
		if(temp != null) {
			pageSize = Integer.parseInt(temp);
			
		}
	}
//	-----------------------------------------------------------------------------------------------	
	
	Connection conn = DBUtill.getMysqlConnection();
	String sql = "SELECT COUNT(*) FROM memolist"; 
	PreparedStatement pstmt = conn.prepareStatement(sql);
	ResultSet rs = pstmt.executeQuery();
	
	rs.next();
	totalCount = rs.getInt(1);

	totalPage = (totalCount - 1) / pageSize + 1;

	try {
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
		currentPage = currentPage > totalPage ? totalPage : currentPage;
	} catch(NumberFormatException e) {

	} 
	
	startNo = (currentPage - 1) * pageSize;
	endNo = startNo + pageSize - 1;
	endNo = endNo > totalCount ? totalCount : endNo;
	sql = "SELECT * FROM memolist ORDER BY idx DESC LIMIT ?, ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, startNo);
	pstmt.setInt(2, pageSize);
	rs = pstmt.executeQuery();
	
	
%>	

<table width="1300" align="center" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="80">글번호</th>
		<th width="80">이름</th>
		<th width="840">메모</th>
		<th width="120">작성일</th>
		<th width="80">ip</th>
		<th width="100"></th>
	</tr>
	
	<tr>
		<td colspan="3" align="center">
			<!-- 한 페이지에 표시할 글의 개수를 변경한다. -->
			<form action="?" method="post">
			페이지당 표시할 글의 개수를 선택하세요.
			<!-- 			
			3<input type="radio" name="pageSize" value="3" />
			5<input type="radio" name="pageSize" value="5"/>
			10<input type="radio" name="pageSize" value="10"/>
			15<input type="radio" name="pageSize" value="15"/>
			20<input type="radio" name="pageSize" value="20"/> 
			-->
			<select name="pageSize" style="width: 70px; height: 25px;">
				<option>3</option>
				<option>5</option>
				<option selected="selected">10</option>
				<option>15</option>
				<option>20</option>
			</select> 
			<input type="submit" value="보기">
			</form>
		</td>
		<td colspan="3" align="right">
			<%=totalCount%>(<%=currentPage%> / <%=totalPage%>)
		</td>
	</tr>
<%

	if(rs.next()) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd(E)");
		do {
%>
	<tr>
		<td align="center"><%=rs.getInt("idx")%></td>
		<td align="center"><%=rs.getString("name").replace("<",	"&lt;").replace(">", "&gt;") %></td>
		<td><%=rs.getString("memo").replace("<","&lt;").replace(">", "&gt;")%></td>
		<td align="center"><%=sdf.format(rs.getTimestamp("writeDate"))%></td>
		<td><%=rs.getString("ip")%></td>
		<!-- 수정, 삭제 버튼 추가 -->
		<td>
			<button type="button" onclick="location.href='memoUpdate.jsp?idx=<%=rs.getInt("idx")%>&currentPage=<%=currentPage%>'">수정</button>
			<button type="button" onclick="location.href='memoDelete.jsp?idx=<%=rs.getInt("idx")%>&currentPage=<%=currentPage%>'">삭제</button>
		</td>
	</tr>
	
<%			
		} while(rs.next());
	} else {
%>
	<tr>
		<td colspan="6">
			<marquee>테이블에 저장된 데이터가 없습니다.</marquee>
		</td>
	</tr>
<%
	}
%>		
	<tr>
		<td colspan="6" align="center">
<%
	startPage = (currentPage - 1) / 10 * 10 + 1;
	endPage = startPage + 9;
	if(currentPage > 1) {
%>

		<button 
			class='button button1'
			type="button" 
			title="첫 페이지로 이동합니다." 
			onclick="location.href='?currentPage=1'"
			>처음</button>
<%		
	}

	
	if(startPage > 1) {
%>
		<button 
			class='button button1'
			type="button" 
			title="이전 10페이지로 이동합니다." 
			onclick="location.href='?currentPage=<%=startPage - 1%>'"
			>이전</button>
<%
	}

	endPage = endPage > totalPage ? totalPage : endPage;
	for(int i=startPage; i<=endPage; i++) {
		if(i == currentPage) {
			out.println("<span class='button button2'>[" + i + "]</span>");
		} else {
		    out.println("<a class='button button1' href=\"?currentPage=" + i + "\" title='" + i + " 페이지로 이동합니다.'>[ " + i + " ]</a>");
		}
	}
	if(endPage < totalPage) {
%>
		<button 
			class='button button1'
			type="button" 
			title="다음 10페이지로 이동합니다." 
			onclick="location.href='?currentPage=<%=endPage + 1%>'"
			>다음</button>

<%
	
	} else {
%>
<%		
	}

	if(currentPage < totalPage) {
%>
		<button 
			class='button button1'
			type="button" 
			title="끝 페이지로 이동합니다." 
			onclick="location.href='?currentPage=<%=currentPage = totalPage%>'"
			>끝</button>
<%		
	}
%>

</table>
</body>
</html>





















