//	id와 password를 입력 받아서 로그인 처리와 로그인 후 역할을 받아오는 클래스
class UserStorage {
/*	
//	로그인 함수
//	loginUser(아이디, 비밀번호, 로그인 성공시 실행할 callback 함수, 로그인 실패시 실행할 callback 함수)
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(id == '홍길동' && password == '1111' || id == '임꺽정' && password == '2222') {
				// 로그인 성공시 실행할 callback 함수(역할을 받아오는 함수)를 실행한다. 
				 onSuccess(id);
			} else {
				// 로그인 실패시 실행할 callback 함수(역할을 받아오는 함수)를 실행한다. 
				onError('로그인 실패');
			}
		}, 1000);
	}
*/

//	callback 지옥에 빠진 이유는 함수가 성공시 실행할 함수와 실패시 실행할 함수를 인수로 받았기 때문이다.
//	promise를 사용하면 성공시 resolve(), 실패시 reject()를 사용했다.
	loginUser(id, password) {
		// 함수가 호출되면 promise를 만들어서 리턴시킨다.
		return new Promise(function (resolve, reject) {
			// 기존에 있던 코드를 promise의 executor 함수에서 실행한다.
			setTimeout(function () {
				if(id == '홍길동' && password == '1111' || id == '임꺽정' && password == '2222') {
					 // onSuccess(id);
					 resolve(id);
				} else {
					// onError('로그인 실패');
					reject('로그인 실패');
				}
			}, 1000);
		})
	}
/*	
//	로그인 후 역할을 받아오는 함수
//	getRoles(아이디, 역할을 받아오면 실행할 callback 함수, 역할을 받아오지 못하면 실행할 callback 함수)
	getRoles(user, onSuccess, onError) {
		setTimeout(function () {
			if(user == '홍길동') {
				onSuccess({
					name: '홍길동',
					role: '관리자'
				});
			} else {
				onError('권한이 없습니다.');
			}
		}, 1000);
	} 		
}	
*/

	getRoles(user) {
		return new Promise(function(resolve, reject) {
			setTimeout(function () {
				if(user == '홍길동') {
					// onSuccess({name: '홍길동', role: '관리자'});
					resolve({name: '홍길동', role: '관리자'});
				} else {
					// onError('권한이 없습니다.');
					reject('권한이 없습니다.');
				}
			}, 1000);
		});
	}
}


const id = prompt('아이디를 입력하세요', '아이디');
const password = prompt('비밀번호를 입력하세요', '비밀번호');

//	로그인 처리를 하기 위해 loginUser() 함수가 작성된 클래스 객체를 생성한다.
const userStorage = new UserStorage();

/*
userStorage.loginUser(
	id, 
	password, 
	user => { 
		console.log(user + ' 로그인 성공');
		userStorage.getRoles(
			user, 
			userWithRole => {
				alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);
			},
			error => alert(error)
			);
	}, 
	console.log
);
*/

/*
userStorage.loginUser(id, password) // 1 
	.then(function (id) {
		// console.log(id);
		return userStorage.getRoles(id); 
		// return을 반드시 적어줘야 한다.(return이 없을시 undefinded가 나온다.)
		// 다음 .then으로 함수가 넘어가기 때문에 return이 필요
	})
	.then(function (userWithRole) {
		// console.log(userWithRole);
		alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);	
		
	})
	.catch(function (error) {
		alert('권한이 없습니다.');
	})
*/
userStorage.loginUser(id, password) // 1 
	.then(id => userStorage.getRoles(id))
	.then(userWithRole => alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`))
	.catch(error => alert('권한이 없습니다.'));


