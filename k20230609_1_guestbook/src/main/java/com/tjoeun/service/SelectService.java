package com.tjoeun.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.tjoeun.dao.GuestbookDAO;
import com.tjoeun.ibatis.MyAppSqlConfig;
import com.tjoeun.vo.GuestbookList;
import com.tjoeun.vo.GuestbookVO;
import com.tjoeun.vo.Param;

public class SelectService {

//	1. 자기 자신(현재 클래스)의 객체를 기본 생성자를 사용해서 정적 필드로 선언한다.
	public static SelectService instance = new SelectService();
	
//	2. 클래스 외부에서 객체를 생성할 수 없도록 기본 생성자의 접근 권한을 private으로 변경한다.
	private SelectService() {}
	
//	3. 자신의 객체를 리턴시키는 정적 메소드를 만든다.	
	public static SelectService getInstance() {
		return instance;
	}
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)를 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
	public GuestbookList selectList(int currentPage) {
		System.out.println("SelectService 클래스의 selectList() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		
		// 1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수를 저장해서 리턴시킬 객체를 선언한다.
		GuestbookList guestbookList = null;
		// GuestbookDAO 클래스 객체에 2번 접근해서 sql 명령을 실행해야 하므로 GuestbookDAO 클래스 객체를 미리 얻어둔다.
		GuestbookDAO dao = GuestbookDAO.getInstance();
		
		try {
			// 1페이지당 표시할 글의 개수를 정한다.
			int pageSize = 10;
			// 테이블에 저장된 전체글의 개수를 얻어온다.
			int totalCount = dao.selectCount(mapper);
			// System.out.println(totalCount);
			
			// pageSize, totalCount, currentPage를 GuestbookList 클래스의 생성자로 넘겨서 1페이지 분량의
			// 글 목록을 저장하고 페이징 작업에 사용할 8개의 변수를 초기화하는 GuestbookList 클래스 객체를
			// 생성한다.
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
			// parameterClass, resultClass는 데이터 타입을 반드시 1개만 적어야 한다.
			// xml 파일의 sql 명령으로 전달할 데이터가 2개 이상일 경우
			// 데이터 타입이 같다면 HashMap 객체에 저장해서 전달하면 되고
			// 데이터 타입이 다르면 클래스 객체에 저장해서 전달하면 된다.
			// 이게 전처리 작업이다...
			HashMap<String, Integer> hmap = new HashMap<>();
			hmap.put("startNo", guestbookList.getStartNo());
			hmap.put("endNo", guestbookList.getEndNo());
			
			// mysql은 아래와 같이 코딩한다. (startNo부터 몇 개 가져오기!이기 때문)
			// hmap.put("pageSize", guestbookList.getPageSize()); 
			
			// 1페이지 분량의 글 목록을 얻어와서 GuestbookList 클래스 객체의 ArrayList(list)에 저장한다.
			// 데이터를 넘겨서 sql 명령문을 실행하기 위함
			guestbookList.setList(dao.selectList(mapper, hmap));
			// System.out.println(guestbookList);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList;
	}
	
//	selectByIdx.jsp에서 호출되는 수정 또는 삭제할 글번호를 넘겨받고 mapper를 얻어온 후 guestbookDAO 클래스의
//	글 1건을 얻어오는 메소드를 호출하는 메소드	
	public GuestbookVO selectByIdx(int idx) {
		System.out.println("SelectService 클래스의 selectByIdx() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		
		// 글 1건을 얻어와서 저장한 후 리턴시킬 객체를 선언한다.
		GuestbookVO vo = null;
		try {
			vo = GuestbookDAO.getInstance().selectByIdx(mapper, idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return vo;
	}

//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(내용)를 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드	
	public GuestbookList selectListMemo(int currentPage, String item) {
		System.out.println("SelectService 클래스의 selectListMemo() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		GuestbookList guestbookList = null;
		GuestbookDAO dao = GuestbookDAO.getInstance();
		
		try {
			int pageSize = 10;
			// 내용에 검색어(내용)를 포함하는 글의 개수를 얻어온다.
			int totalCount = dao.selectCountMemo(mapper, item); 
			// System.out.println(totalCount);
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
			// startNo, endNo만 sql 명령으로 넘겨줄 때는 데이터 타입이 같기 때문에 HashMap을 이용했지만 
			// category, item을 같이 넘겨야 하므로 데이터 타입이 다르기 때문에 별도의 클래스를 만들고
			// 클래스 객체에 데이터를 담아서 넘겨줘야 한다.
			Param param = new Param();
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			param.setItem(item);
			// System.out.println(param);
			
			// 내용에 검색어를 포함하는 1페이지 분량의 글을 얻어와서 GuestbookList 클래스의 ArrayList에 저장한다.
			guestbookList.setList(dao.selectListMemo(mapper, param));
			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList;
	}
	
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(이름)를 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드	
	public GuestbookList selectListName(int currentPage, String item) {
		System.out.println("SelectService 클래스의 selectListName() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		GuestbookList guestbookList = null; // 1
		GuestbookDAO dao = GuestbookDAO.getInstance();
		
		try {
			int pageSize = 10;
			int totalCount = dao.selectCountName(mapper, item); 
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
			Param param = new Param();
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			param.setItem(item);
			
			guestbookList.setList(dao.selectListName(mapper, param));
			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList; // 2
	}
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(내용+이름)를 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드	
	public GuestbookList selectListMemoName(int currentPage, String item) {
		System.out.println("SelectService 클래스의 selectListMemoName() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		GuestbookList guestbookList = null;
		GuestbookDAO dao = GuestbookDAO.getInstance();
		
		try {
			int pageSize = 10;
			int totalCount = dao.selectCountMemoName(mapper, item); 
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
			Param param = new Param();
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			param.setItem(item);
			
			guestbookList.setList(dao.selectListMemoName(mapper, param));
			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList;
	}
	
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(내용, 이름, 내용+이름)를 넘겨받고 
//	mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 카테고리에 따른 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는
//	메소드를 호출하는 메소드	
	public GuestbookList selectListMulti(int currentPage, String category, String item) {
		System.out.println("SelectService 클래스의 selectListMulti() 메소드 실행");
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		GuestbookList guestbookList = null;
		GuestbookDAO dao = GuestbookDAO.getInstance();
		
		try {
			int pageSize = 10;
			// 카테고리에 따른 검색어를 포함하는 글의 개수를 얻어온다.
			// 카테고리에 따른 검색어가 포함되었나 조건을 세워야 하기 때문에 Param 클래스 객체를 사용한다.
			// 이전에는 검색어만 넘어갔지만 이젠 검색어가 어느 카테고리에 있는지 알아야 하기 때문.
			// 카테고리와 아이템은 둘 다 String이기 때문에 HashMap도 상관없지만 아래에 어차피 param을 사용해야 하므로 param을 사용한다.
			Param param = new Param();
			param.setCategory(category);
			param.setItem(item);
			int totalCount = dao.selectCountMulti(mapper, param); 
//			System.out.println(totalCount);
			
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			
			guestbookList.setList(dao.selectListMulti(mapper, param));
//			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList;
	}
}










