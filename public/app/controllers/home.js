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
		restService.get({resource:'profile'}, function(response){

		});
	}

	$scope.registerProfile = function(){
		restService.post({resource:'profile'}, $scope.newUser, function(response){ 
			window.location.href ='/account';
		});
	}

	$scope.login = function(){
		restService.post({resource:'login'}, $scope.returningUser, function(response){
			if(response.confirmation != 'success'){
				alert(response.message);
				return;
			}
			window.location.href ='/account';
		});
	}

}]);