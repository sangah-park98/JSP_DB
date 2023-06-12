onload = function () {
	let a = document.querySelectorAll('a');
	let img = document.querySelectorAll('img')[0];
	let count = 3;
	
	a[0].onclick = function () {
		let imgAlt = img.getAttribute('alt');
		
		if(imgAlt == 'img01' ) {
			alert('첫번째 이미지입니다.');
		} else {
			img.setAttribute('src', `./images/img0${--count}.jpg`);
			img.setAttribute('alt', 'img0' + count);
		}
	}
	
	a[1].onclick = () => {
		if(count > 4) {
			alert('마지막 이미지입니다.');
		} else {
			img.setAttribute('src', `./images/img0${++count}.jpg`);
			img.setAttribute('alt', `img0${count}`);
		}
			
		}
	}