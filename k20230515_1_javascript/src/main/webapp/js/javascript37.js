onload = function () {
	let a = document.querySelectorAll('a');
	let img = document.querySelectorAll('img')[0];
	let count = 3; // 이미지 정가운데 번호
	
//	'◀'에 onclick 이벤트를 연결한다.
	a[0].onclick = () => {
		// getAttribute('속성이름'): 속성에 지정된 값을 얻어온다.
		// console.log(img.getAttribute('alt')); // img03
		let imgAlt = img.getAttribute('alt');
		if(imgAlt == 'img01') {
			alert('첫번째 이미지입니다.');
		} else {
			// img.setAttribute('src', './images/img0' + --count + '.jpg');
			// --count인 이유는 위에서 count가 3일 때 이전 그림인 02번 그림을 보여줘야 하므로
			// 감소 후 출력인 --count가 된다.
			img.setAttribute('src', `./images/img0${--count}.jpg`);
			img.setAttribute('alt', 'img0' + count);
		}
	}

//	'▶'에 onclick 이벤트를 연결한다.
	a[1].onclick = () => {
		// let imgAlt = img.getAttribute('alt');
		if(count > 4) {
			alert('마지막 이미지입니다.');
		} else {
			img.setAttribute('src', `./images/img0${++count}.jpg`);
			img.setAttribute('alt', `img0${count}`);
			
		}
	}
}