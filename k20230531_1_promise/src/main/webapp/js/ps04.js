class UserStorage {
	
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(id == '박상아' && password == '1111' || id == '박은별' && password == '2222') {
				onSuccess(id);
			} else {
				onError('로그인 실패');
			}
		}, 1000);
	}
	
	
	getRoles(user, onSuccess, onError) {
		setTimeout(function () {
			if(user == '박상아') {
				onSuccess({
					name: '박상아',
					role: '관리자'
				});
			} else {
				onError('권한이 없습니다.');
			}
		}, 1000);
	}
	
}



const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

const userStorage = new UserStorage();

userStorage.loginUser(
	id,
	password,
	user => {
		console.log(user + '로그인 성공');
		userStorage.getRoles(
			user,
			userwithRole => {
				alert(`${userwithRole.name}님 당신은 ${userwithRole.role} 입니다.`);
			}, function(error) {
				alert(error);
			}
		)
	}
	
)








