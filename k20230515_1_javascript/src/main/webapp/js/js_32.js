function allCheck() {
	
	let check = document.getElementsByName[0].checked;
	
	let checkBoxs = document.getElementsByName('chk');
	
	for(let checkBox of checkBoxs) {
		checkBox.checked = check;
	}
}

function chkSelect() {
	
	let checkBoxs = document.getElementsByName('chk');
	let flag = true;
	
	for(let checkBox of checkBoxs) {
		if(!checkBox.checked) {
			flag = false;
			break;
		} 
	}
	document.getElementsByName('all')[0].checked = flag;
	
}

function selectColor() {
	
	let checkBoxs = document.getElementsByTagName('chk');
	for(let checkBox of checkBoxs) {
		if(checkBoxs.checked) {
			document.getElementById(checkBox.value).style.backgroundColor = checkBox.value;
		} else {
			// document.getElementById(checkBox.value).style.backgroundColor = 'white';
			document.querySelector('#' + checkBox.value).style.backgroundColor = 'white';
		}
	}
}

function clearColor() {

	let divs = document.querySelectorAll('#colorBox > div');
	for(let div of divs) {
		div.style.backgroundColor = 'white';
		div.style.color = 'black';
	}
	document.getElementsByName('all')[0].checked = false;
	allCheck();
}