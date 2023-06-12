$(() => {
	
	$('div').hide();
	
	$('.menu').hover (
		function() {
			$(this).children('div').stop().slideDown();
		},
		function() {
			$(this).children('div').stop().slideUp();
		}
	);
});

