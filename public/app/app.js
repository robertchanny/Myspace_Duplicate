var modules = [
	'HomeModule',
	'RestServiceModule'
];

var app = angular.module('Myspace', modules, function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
})

//Log in and with the log in person in bold