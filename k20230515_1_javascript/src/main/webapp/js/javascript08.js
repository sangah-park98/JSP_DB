let superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];

for (let i=0; i<superheroes.length; i++) {
	console.log(superheroes[i]);
}
console.log('========================================= 일반 for');

for (let hero of superheroes) {
	console.log(hero);
}
console.log('========================================= 향상된 for - of');

for (let i in superheroes) {
	console.log(superheroes[i]);
}
console.log('========================================= 향상된 for - in');

//	forEach(): 인수로 지정된 함수로 배열 요소를 차례대로 전달하며 함수를 반복해 실행한다.
function print(hero) { // 일반 함수
	console.log(hero);
}

//	배열명.forEach(함수명), forEach() 함수의 인수로 전달되는 함수 뒤에 ()를 붙이면 안된다.
superheroes.forEach(print);
console.log(print);
console.log('========================================= forEach() - 일반 함수');

const print2 = (hero) => { // 익명 화살표 함수
	console.log(hero);
}

superheroes.forEach(print2);
console.log('========================================= forEach() - 익명 화살표 함수');

const print3 = hero => console.log(hero); // 익명 화살표 함수, ()와 {} 생략
	
superheroes.forEach(print3);
console.log('========================================= forEach() - 익명 화살표 함수, ()와 {} 생략');

//	forEach() 함수의 인수로 화살표 익명 함수 전달
superheroes.forEach((hero) => {
	console.log(hero);
});
console.log('========================================= forEach() - 인수로 익명 화살표 함수 전달');

//	forEach() 함수의 인수로 ()와 {}를 생략한 화살표 익명 함수 전달
superheroes.forEach(hero => console.log(hero));
console.log('========================================= forEach() - 인수로 ()와 {}를 생략한 익명 화살표 함수 전달');

//	기존 배열에 저장된 값을 제곱해서 새 배열을 만든다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = []; // 빈 배열

for(let i=0; i<array.length; i++){
	//squared.push(array[i] * array[i]);
	squared.push(Math.pow(array[i], 2));
}
console.log(squared);

const squared2 = []; // 빈 배열
for(let i in array){
	squared2.push(Math.pow(array[i], 2));
}
console.log(squared2);
console.log('========================================= for');

const squared4 = []; 
function square(n) {
	squared4.push(Math.pow(n, 2));
}
array.forEach(square)
console.log(squared4);
console.log('========================================= forEach()');

const squared5 = []; 
array.forEach(function (n) {
	squared5.push(Math.pow(n, 2));
})
console.log(squared5);
console.log('========================================= forEach() - 익명 함수');

const squared6 = []; 
array.forEach(n => squared6.push(Math.pow(n, 2)));
console.log(squared6);
console.log('========================================= forEach() - 화살표 함수');

//	map(): 배열의 요소들을 대상으로 인수로 지정한 함수의 실행 결과를 배열로 리턴한다.
//	forEach()는 한 번에 하나씩, map()은 한 번에 훅 일괄 처리 가능
//	배열명.map(함수명)
function square2(n) {
	return Math.pow(n, 2);
}
const squared7 = array.map(square2); 
console.log(squared7);
console.log('========================================= map()');


const squared8 = array.map(function (n) {
	return Math.pow(n, 2);
}); 
console.log(squared8);
console.log('========================================= map() - 익명 함수');

const squared9 = array.map(n => Math.pow(n, 2)); 
console.log(squared9);
console.log('========================================= map() - 화살표 함수');

//	배열 내부의 객체에서 key가 text인 value값만 얻어와서 새 배열을 만든다.
const items = [
	{
		id: 1,
		text: 'hello'
	},
	{
		id: 2,
		text: 'bye'
	}
];

const text = [];
for(let i=0; i<items.length; i++){
	//console.log(items[i].text);
	text.push(items[i].text);
}
console.log(text);

const text2 = [];
for(let item of items){
	text2.push(item.text);
}
console.log(text2);

const text3 = [];
for(let i in items){
	text3.push(items[i].text);
}
console.log(text3);
console.log('========================================= for()');

const text4 = [];
function textChoice(item) {
	text4.push(item.text);
}
items.forEach(textChoice);
console.log(text4);

const text5 = [];
items.forEach(function (item) {
	text5.push(item.text);
});
console.log(text5);

const text6 = [];
items.forEach(item => text6.push(item.text));
console.log(text6);
console.log('========================================= forEach()');

function textChoice2(item) {
	return item.text;
}
const text7 = items.map(textChoice2);
console.log(text7);

const text8 = items.map(function (item) {
	return item.text;
});
console.log(text8);

const text9 = items.map(item => item.text);
console.log(text9);
console.log('========================================= map()');

//	indexOf(): 배열 전체에서 인수로 지정된 값의 왼쪽에서 첫 번째 요소를 찾아 index를 리턴한다. (단일 배열)
//	배열명.indexOf(값)
//	인수로 지정한 값이 있으면 index가 리턴되지만 없으면 -1이 리턴된다.
//	배열명.lastIndexOf(값)
//	lastIndexOf(): 배열 전체에서 인수로 지정된 값의 오른쪽에서 첫 번째 요소를 찾아 index를 리턴한다.
let superheroes2 = ['아이언맨', '캡틴아메리카', '토르', '캡틴아메리카', '닥터스트레인지'];
const index = superheroes2.indexOf('캡틴아메리카');
console.log('indexOf(): ' + index);

const index2 = superheroes2.lastIndexOf('캡틴아메리카');
console.log('lastIndexOf(): ' + index2);

const index3 = superheroes2.indexOf('캡틴 아메리카');
console.log('없으면: ' + index2);

if(index >=0) {
	console.log('있음');
} else {
	console.log('없음');
}
console.log(index3 >=1 ? '있음' : '없음'); // 삼항 연산자
console.log('========================================= indexOf(), lastIndexOf()');


const todos = [
	{
		id: 1,		
		text: '자바스크립트 입문',
		done: true
	},
	{
		id: 2,		
		text: '함수',
		done: true
		
	},
	{
		id: 3,		
		text: '객체와 배열',
		done: true
		
	},
	{
		id: 4,		
		text: '배열 함수',
		done: false
		
	},
];
//	findIndex(): 배열에서 인수로 지정된 조건을 만족하는 첫 번째 요소를 찾아 index를 리턴한다. (객체 배열)
//	배열명.findIndex(조건) => 조건은 함수로 작성해야 한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 index가 리턴되지만 없으면 -1이 리턴된다.
//	객체 배열 안에서 있는지 볼 때

function todoChoice(todo) {
	return todo.id == 2;
}
const index4 = todos.findIndex(todoChoice);
console.log(index4);

const index5 = todos.findIndex(function (todo) {
	return todo.id == 4;
});
console.log(index5);

const index6 = todos.findIndex(todo => todo.id == 5);
console.log(index6);
console.log('========================================= findIndex()');

//	find(): 배열에서 인수로 지정된 조건을 만족하는 첫 번째 요소를 찾아 리턴한다.(첫 번째 요소 하나만)
//	배열명.find(조건) => 조건은 함수로 작성해야 한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 값이 리턴되지만 없으면 -1이 리턴된다.

function todoFind(todo) {
	return todo.done == true;
}
const item = todos.find(todoFind);
console.log(item);

const item2 = todos.find(function (todo) {
	return todo.done == false;
});
console.log(item2);

const item3 = todos.find(todo => todo.done == 'error');
console.log(item3);
console.log('========================================= find()');

//	filter(): 배열에서 인수로 지정된 조건을 만족하는 모든 요소를 찾아 배열로 리턴한다.
//	배열명.filter(조건) => 조건은 함수로 작성해야 한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 만족하는 값이 저장된 배열이 리턴되고 조건을 만족하는
//	값이 없으면 빈 배열이 리턴된다.  

function todoFilter(todo) {
	return todo.done; // return todo.done == true;
}
const item4 = todos.filter(todoFilter);
console.log(item4);


const item5 = todos.filter(function (todo) {
	return !todo.done; // return todo.done == false;
});
console.log(item5);

const item6 = todos.filter(todo => todo.done == 'error');
console.log(item6);


