<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카테고리 프로젝트</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./js/formCheck.js" defer="defer"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
</head>
<body class="p-3">

<h1 class="m-3">Category Project</h1>

<!-- 메인 카테고리 입력 -->
<!-- jQuery로 메인 카테고리 입력 폼 체크 -->
<form id="form" class="row m-3" action="insert.jsp" method="post">
	<div class="col-md-3">
		<input id="category" class="form-control" type="text" name="category"/>
	</div>
	<div class="col-md-2">
		<input class="btn btn-outline-primary" type="submit" value="메인 카테고리 만들기"/>
	</div>
</form>

<hr style="color: blue;"/>

<!-- 카테고리 개수만큼 반복하며 카테고리 목록을 출력하고 서브 카테고리를 입력받는다. -->
<%-- ${categoryList} --%>
<c:forEach var="vo" items="${categoryList.list}">
	<!-- 서브 카테고리를 입력하는 모든 폼에 다른 name 속성이 지정되야 식별이 가능하므로 폼 이름을 만든다. -->
	<c:set var="formName" value="form${vo.idx}"></c:set>

	<!-- jQuery로 서브 카테고리 입력 폼 체크 -->
	<form class="sub_form row m-1" action="reply.jsp" method="post" name=${formName}>
		<div class="col-md-4">
			<!-- idx, gup, lev, seq를 표시하는 텍스트 상자는 테스트가 완료되면 모두 hidden으로 변경한다. -->
			<input type="text" name="idx" value="${vo.idx}" size="1"/>
			<input type="text" name="gup" value="${vo.gup}" size="1"/>
			<input type="text" name="lev" value="${vo.lev}" size="1"/>
			<input type="text" name="seq" value="${vo.seq}" size="1"/>
			<span>${vo.category}</span>
		</div>
		
		<div class="col-md-3">
			<input class="sub_category form-control" type="text" name="category"/>
		</div>
		<div class="col-md-2">
			<input class="btn btn-outline-primary" type="submit" value="서브 카테고리 만들기"/>
		</div>
	</form>
</c:forEach>

</body>
</html>