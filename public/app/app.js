var modules = [
	'HomeModule',
	'RestServiceModule',
	'AccountModule'
];

var app = angular.module('Myspace', modules, function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});