$(() => {
	
	$('.delete').click(function() {
		
		$(this).parent().slideUp('slow');
		console.log(this);
//		$(this).parent().slideUp(1000, 'easeInOutBounce'); // easings 플러그인을 사용하여 애니메이션 효과처럼 낸다.
	});
	
	$('#view').click(function () {
		$('.pane').slideDown();
//		$('pane').css('display', 'block');
	});
	
});