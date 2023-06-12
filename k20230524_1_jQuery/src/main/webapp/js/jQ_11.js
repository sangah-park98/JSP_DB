$(() => {
	
	$('h2').click(function () {
		
		$('div > p').show();
		$('p').each(function (index) {
			$(this).animate(
				{
					'top' : 72 + index * 50 + 'px'
				}, 500, 'linear'
				
			)
		})
	});
	
	
	$('p').bind('click', function() {
		
		$(this).css('backgroundColor', 'pink');
		$(this).siblings('p').css('backgroundColor', 'white');
		$(this).siblings('p').css('backgroundColor', 'white');
		
		let command = $(this).text();
		
		switch(command) {
			case 'hide()':
				$('#img').hide();
				break;
			case 'show()':
				$('#img').show(); 
				break;
			case 'toggle()':
				$('#img').toggle(); 
				break;
			case 'slideUp()':
				$('#img').slideUp(); 
				break;
			case 'slideDown()':
				$('#img').slideDown(); 
				break;
			case 'slideToggle()':
				$('#img').slideToggle(); 
				break;
			case 'fadeOut()':
				$('#img').fadeOut(); 
				break;
			case 'fadeIn()':
				$('#img').fadeIn(); 
				break;
			case 'fadeToggle()':
				$('#img').fadeToggle(); 
				break;
			case 'fadeTo()':
				$('#img').fadeTo(1000, 0.2);
				break;
			case 'animate()':
				$('#img').animate(
						{
							'top': '300px',
							'left': '600px',
							'width': '300px'
						}, 1000, 'linear'
				)
				let img2 = $('#img').clone().attr('id', 'img').attr('src', './images/img04.jpg');
				$('#img').before(img2);
				$('#img2').animate(
					{
						'width': '150px',
						'left': '300px',
						'top': '200px'
					}, 1000
				);
				break;
		}
		
	});
	
	
	
});