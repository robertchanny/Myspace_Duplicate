var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', 'restService', function($scope, restService){
	
	$scope.newUser = { //input that user puts in
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}

	$scope.returningUser = {
		email: '',
		password: ''
	}

	$scope.init = function(){
		console.log('Home controller init');
	}

	$scope.registerProfile = function(){
		console.log(JSON.stringify($scope.newUser));
		restService.post({resource:'profile'}, $scope.newUser, function(response){ 
		
		//resource:'profile' tells restService.js what the wildcard :resource is. resource has to match what the wildcard :resource in restService.js is - this is agnostic to the api.js since that's in the backend.
		
		//this functions fires when user clicks, $scope.newUser gets passed to api.js and is literally the req.body
		
			console.log(JSON.stringify(response));
		});
	}

	$scope.login = function(){
		console.log(JSON.stringify($scope.returningUser));
		restService.post({resource:'login'}, $scope.returningUser, function(response){
			console.log(JSON.stringify(response));
		});
	}

}]);