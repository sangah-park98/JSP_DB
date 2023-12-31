//	syntantic sugar: 기존에 존재하는 것(promise) 위에 기존에 존재하는 것으로 감싸서 좀 더 편하게 사용할 수
//	있게 해주는 것을 말한다.

//	async와 await를 사용하면 promise를 보다 깔끔하게 사용할 수 있다.

//	promise
function fetchUser() {
//	promise 쓰는 이유: 작업 시간이 오래 걸리면 비동기적으로 작업을 처리할 수 있다.
//	promise를 리턴하면 pending 상태로 리턴된다.
	return new Promise(function (resolve, reject) {
		// return '몽실이'; // pending 상태로 리턴한다. (Promise 안에 return 안 쓰게 주의)
		// promise 내부에서는 resolve() 또는 reject()를 실행해서 리턴시켜야 한다.
		resolve('몽실이'); // fulfilled 상태로 리턴한다.
		// reject('몽실이'); // rejected 상태로 리턴한다.
	});
		
}

const user = fetchUser();
console.log('1. user: ' , user); // ▶Promise
user
	.then(function (response) {
		console.log('1. response: ' , response); 
	})
	.catch(function (error) {
		console.log('1. error: ' , error);
	})

//	----------------------------------------------------------------------------

//	async
//	함수 앞에 async를 붙이면 함수 내부의 코드가 자동으로 promise로 변경된다.
//	async을 붙이면 resolve나 reject를 사용하지 않고 return을 사용한다.
//	catch로 갈 수 없고 무조건 then만 실행한다.

/*
async function fetchUser2() { // 가짜 에러 
	return '몽실이';
}

const user2 = fetchUser2();
console.log('2. user2: ' , user2);
user2
	.then(function (response) {
		console.log('2. response: ' , response); 
	})
*/


//	await 
function delay(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();		
		}, ms)
	})
}

//	async를 붙여서 promise를 리턴하도록 설정한 getApple() 함수는 await에 의해서 delay() 함수가
//	끝나기를 기다렸다가 delay()가 종료되면 promise를 리턴한다.
async function getApple() {
//	await는 async가 붙은 함수에서만 사용할 수 있고 await를 붙여준 함수가 완전히 끝나기를 기다렸다가
//	다음 작업을 실행한다. 
	await delay(2000);
	return '사과';
}

const apple = getApple();
console.log('3. apple: ' , apple);
apple
	.then(function (response) {
		console.log('3. apple response: ' , response); 
	})


async function getPeach() {
	await delay(1000);
	return '복숭아';
}

const peach = getPeach();
console.log('3. peach: ' , peach);
peach
	.then(function (response) {
		console.log('3. peach response: ' , response); 
	})

//	promise도 지나치게 chaining을 하면 callback 지옥 현상이 나타난다.
//	return getApple() 에 의해 apple이 return 되는데 그 다음 pickFruits() 함수의 .then이 먹기 이전에
//	.then이 있으므로 result가 출력되지 않는다.
/*
function pickFruits() {
	return getApple()
		.then(function (apple) {
			console.log('3. pickFruits: ' , apple);
			return getPeach()
				.then(function (peach) {
				console.log('3. pickFruits: ' , peach);
				return `${apple} + ${peach}`;
				});
		});
}
*/

//	async와 await를 사용하면 순서를 지켜야 하는 함수에 순차적 처리를 가능하게 해준다.
//	순차 처리 

/*
async function pickFruits() {
	const apple = await getApple(); // 2초 대기
	const peach = await getPeach(); // 1초 대기
	return `${apple} + ${peach}`; 
	 
}
*/

//	병렬(동시) 처리 => 실행하는 promise가 서로 연관이 있을 때 
async function pickFruits() {
//	promise가 만들어지는 순간 executor 함수가 실행된다.
//	병렬 처리할 함수가 동시에 실행된다.
	const applePromises = getApple();
	const peachPromises = getPeach();
//	await를 이용해서 동시에 실행한 함수가 종료될 때까지 대기한다.	
	const apple = await applePromises; // 2초 대기
//	getPeach()는 getApple()와 동시에 실행했기 때문에 getApple() 함수가 2초간 실행되는 도중에 종료된다.
	const peach = await peachPromises; // 1초 대기 
	return `${apple} + ${peach}`; 
}

pickFruits().then(function (result) {
	console.log('3. result: ' , result);
	
});

//	병렬(동시) 처리 => 실행하는 promise가 서로 연관이 없을 때 
//	promise가 서로 연관이 없을 경우 병렬 처리할 때 위와 같이 작성하지 않고 Promise 객체의 all() 함수
//	또는 race()를 사용해서 작성할 수 있다.

//	all() => 전체 => 모든 promise 실행
function pickAllFruits() {
//	all() 함수의 인수로 병렬처리 할 promise가 저장된 배열을 전달하면 배열로 전달한 모든 promise가
//	종료된 후 리턴값(배열)이 then()으로 전달된다.
	return Promise.all([getApple(), getPeach()]) // 여기서 리턴하면 결과가 저장된 배열이 리턴된다.
//		.then(function (fruits) {
//			return fruits;
//		})
		.then(function (fruits) { // join 쓰면 사과 + 바나나의 형태로 나온다.
			return fruits.join(' + ');
		})
}

pickAllFruits().then(function (result) {
	console.log('4. result: ' , result);
})

//	race() => 경쟁 => 가장 먼저 종료되는 promise만 실행
function pickRaceFruits() {
//	race() 함수의 인수로 병렬처리 할 promise가 저장된 배열을 전달하면 배열로 전달한 모든 promise
//	중에서 가장 먼저 종료된 promise의 리턴값이 then()으로 전달된다. => 나머지 promise는 무시된다.
	return Promise.race([getApple(), getPeach()]);
}

pickRaceFruits().then(function (result) {
	console.log('5. result: ' , result);
})


























