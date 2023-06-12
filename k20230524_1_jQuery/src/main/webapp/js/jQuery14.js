$(() => {
	
	$('b').click(function () {
		// 클릭하면 메뉴가 보이고 다시 클릭하면 사라지게 한다.
		// $(this).next().toggle(); 
		// $(this).next().slideToggle(); // toggle: show와 hide를 번갈아 함
		
		$(this).next().slideDown();
		$(this).parent().siblings().find('ul').slideUp(); // 나를 제외한 모든 형제들은 창이 닫히게
	});
	
});