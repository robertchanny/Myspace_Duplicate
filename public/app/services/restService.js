var restService = angular.module('RestServiceModule', ['ngResource']);

restService.factory('restService', ['$resource', function($resource){
	return $resource('/api/:resource/:id', {}, {

		query: {method:'GET', params:{}, isArray:false},
		get: {method:'GET'},
		post: {method:'POST'},
		put: {method:'PUT'},
		update: {method:'PUT'},
		delete: {method:'DELETE'}
	});
}]);