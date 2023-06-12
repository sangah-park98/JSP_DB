function createImg() {
	
	let radios = document.getElementsByName('radioBtn');
	
	let radioValue = '';
	for(let radio of radios) {
		if(radio.checked) {
			radioValue = radio.value;
		}
	}
	/*	
	let img = document.createElement('img');
	img.setAttribute('src', radioValue);
	
	let div = document.getElementById('imgView');
	
	let removeImg = div.lastElementChild
	div.removeChild(removeImg);
	
	div.appendChild(img);
	*/
	let img = document.createElement('img');
	img.setAttribute('src', radioValue);
	
	let div = document.getElementById('imgView');
	
	let removeImg = div.lastElementChild;
	div.removeChild = removeImg;
	
	div.appendChild(img);
	
}


function removeImg() {
	
	let div = document.getElementById('imgView');
	

	div.innerHTML = '<br/>';
}














