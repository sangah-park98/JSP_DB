$(function () {
	alert('jQuery onload 이벤트5');
});

function imgSize() {
//	$('img').css('width:200px', 'height:200px');
//	$('css 선택자')
//	$('img').css('width': '200px').css('height': '200px');
	$('img').css({'width': '200px', 'height': '200px'}).css('opacity', '50%');

}

function highLight() {
	
	$('#id').css('backgroundColor', 'mistyRose');
	$('#list > li').first().css('backgroundColor', 'mistyRose');
	$('#list > li').last().css('backgroundColor', 'mistyRose');
	$('#list > li').eq(1).css('backgroundColor', 'mistyRose');
}


function addImage() {
	
	$('div').append('<img alt="샤미드" src="./images/img03.jpg"/>');
	
}


function hideImage() {
	$('img').hide();
}












