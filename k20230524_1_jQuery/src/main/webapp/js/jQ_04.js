function choice() {
	
	let inputs = $('input:text');
	$('input:text').eq(0).val('일지매');
}

function choice2() {
	let text = $('input:radio').eq(0).val();
	$('#a').eq(0).html('<h1>' + text + '</h1>');
}

function choice3() {
	let text = $('input:checkbox').eq(0).val();
	$('#a').eq(0).html('<h1>' + text + '</h1>')
					
}

$(function () {
	
	$('select').eq(0).click(function () {
		let select = $('select:eq(0) > option:selected').eq(0).val();
		$('input:text:eq(0)').val(select);
	});
	
	$('input[name=gender]').click(() => {
		$('input:text:eq(1)').val($('input[name=gender]:checked').eq(0).val());
		
	});
	
});


