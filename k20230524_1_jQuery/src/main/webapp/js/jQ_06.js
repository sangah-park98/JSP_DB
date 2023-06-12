$(() => {
	$('.error').hide();
	
	$('#single').submit(function () {
		let userID = $('#infoBox').val().trim();
		if(userID == null || userID == '') {
			$('#infoBox').val('');
			$('#infoBox').focus();
			$('.error').show();
			return false;
		}
		return true;
	});
	
	$('input:checkbox[name=all]').click(function () {
		let checked = $('input:checkbox[name=all]').prop('checked');
		$('input:checkbox[name:chk]').prop('checked', checked);
		
	});
	
	
	$('input:checkbox[name=chk]').click(function () {
		
		if($('input:checkbox[name=chk]').length == $('input:checkbox[name=chk]:checked').length) {
			$('input:checkbox[name=all]').prop('checked', true);
		} else {
			$('input:checkbox[name=all]').prop('checked', false);
		}
	});
	
	
	$('#confirm').click(function () {
		let chks = $('input:checkbox[name=chk]:checked');
		if(chks.length == 0) {
			$('#result').html('<b style="color:red">과일을 먼저 선택해주세요.</b>');
		} else {
			chks.each(function (index) {
				let chk = chks.eq(index);
				$('#result').html(`과일 이름: ${chk.next().html()} / 과일 가격: ${chk.val()}원`);
			});
		}
		
			
	});
	
	
	
	
	
	
	
	
	
	
	
});