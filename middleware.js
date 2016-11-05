'use strict';

module.exports = test;

function test() {
	return function middleware(req, res, next) {
		console.log('I\'m middleware');
		req.requestTime = Date.now();
		next();
	};
}
