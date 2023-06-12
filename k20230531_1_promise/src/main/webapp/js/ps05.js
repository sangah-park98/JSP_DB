// const getHen = () => new Promise((resolve, reject) => setTimeout(() => resolve('암닭'), 1000));


const getHen = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
		 resolve('암닭');
		}, 1000);
	});
}