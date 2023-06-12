function passwordCheck(obj) {
	
//	정규식을 이용한 패스워드 체크 방법 1.
	const pw = obj.password.value.trim();
	
//	아래의 pattern을 포함해야 한다.
	const pattern = new RegExp('^(?=.*[0-9]+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[!@#$%^&]+)[a-zA-z0-9!@#$%^&]{8,12}$');
	
	
	if(!pattern.test(pw)) {
		alert('비밀번호에는 영문자 및 특수문자가 포함되어야 합니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	
	if(obj.password.value.trim() != obj.repassword.value.trim()) {
		alert('비밀번호를 확인해 주세요.');
		obj.password.value='';
		obj.repassword.value='';
		obj.password.focus();
		return false;
	}
	return true;
}