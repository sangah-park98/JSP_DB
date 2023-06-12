const PurpleCuteSlime = {
	name: '슬라임',
	attribute: 'cute',
	color: 'purple'
}

//	rest: spread와는 반대로 퍼져있는 것을 모으는 역할을 한다. 연산자는 spread와 같이 '...'을 사용한다.
//	객체에 rest를 사용할 때는 뽑아낸 값을 저장할 변수 이름이 객체를 구성하는 key와 같아야 한다.
//	지정된 속성을 제외한 나머지 속성이 rest에 저장되므로 rest는 반드시 맨 마지막에 딱 1번만 써야 한다. 

/*
const {color, ...cuteSlime} = PurpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const {attribute, ...slime} = cuteSlime;
console.log(attribute);
console.log(slime);
*/
console.log('---------------------------------');

const numbers = [0, 1, 2, 3, 4, 5, 6];

//	배열에 사용할 때도 rest는 맨 마지막에 딱 1번만 써야 한다.
//	객체는 데이터가 할당된 key가 존재하므로 변수 이름을 key와 같은 이름으로 작성하면 되었지만 배열에는
//	key가 존재하지 않아서 변수 이름으로 뭐를 적어도 상관없고 배열의 인덱스 순서대로 뽑혀나온다.
const [a, b, ...c] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log('---------------------------------');

//	spread와 rest를 사용한 함수 - 합계

function sum(...rest) {
	// console.log(rest);
	/*
	return rest.reduce(function(acc, curr) {
		return acc + curr;	
	}, 0);
	*/
	return rest.reduce((acc, curr) => acc + curr, 0);
}

const spread = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(spread)); // 배열로 넘긴다.
console.log(sum(...spread)); // 배열을 풀어서 각각의 숫자 데이터로 넘긴다.(1, 2, 3, 4, 5, 6, 7)와 같은 결과가 나온다.
console.log(sum(1, 2, 3, 4, 5, 6, 7)); 

console.log(0 + spread);
console.log(typeof (0 + spread));
console.log('---------------------------------');

//	spread와 rest를 사용한 함수 - 최대값

function maxValue(...spread) {
	/*
	return spread.reduce(function(acc, max){
		return max > acc ? max : acc;
	}, spread[0]); // 초기치 값을 생략하면 배열의 0번째 값으로 자동으로 들어간다.
	}
*/
	return spread.reduce((acc, max) => max > acc ? max : acc);}

const result = maxValue(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);




