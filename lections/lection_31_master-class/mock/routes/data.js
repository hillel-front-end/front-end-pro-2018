let fs = require('fs');
let path = '.';

function pathConcat(pathname) {
	return path + '/' + pathname;
}

function filereader(fsRef, path) {
	return new Promise(function (resolve, reject) {
		fsRef.readFile(path, 'utf8', function (e, d) {

			if (e) reject(e);

			else resolve(JSON.parse(d));
		});
	});
}

function products(req, res) {
	let path = pathConcat('mock/api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(path);
	
	servicePromise
		.then((response) => {
			res.json(response);
		});
}

function order(req, res) {
	let path = pathConcat('mock/api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(req.body)
	console.log(path);
	
	servicePromise
		.then((response) => {
			res.json(response);
		});
}


module.exports = { products, order };