/*
console.log(1);

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
		console.log(data);
		
	})
console.log(2);	
*/


console.log(1);
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
		console.log(data.json())
	})
	.then(function (data) {
		console.log(data);
	})
console.log(2);
	
fetched.then(function (response) {
	
})	
	
	
	
	
	
	
	
	
	
	
	
	
	