var accountCtr = angular.module('AccountModule', []);

accountCtr.controller('AccountController', ['$scope', 'restService', function($scope, restService){
	$scope.profile = null;

	$scope.init = function(){
		console.log('Account Controller Init');
		restService.get({resource:'currentuser'}, function(response){
			$scope.profile = response.profile;
			console.log('Current User: ' + JSON.stringify($scope.profile));
		});
	}

	$scope.update = function(){
		restService.put({resource:'profile'}, $scope.profile, function(response){
			console.log(JSON.stringify(response))
		});
	}

}]);