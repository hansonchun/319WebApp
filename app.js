
var app = angular.module('WebApp', []);

app.controller('AppController', function($scope, $http){


	// Grab dummy data
	$http.get('data/MOCK_DATA.json').
	success(function(data, status, headers, config) {
			$scope.data = data
			console.log($scope.data);
		}).
	error(function(data, status, headers, config){
		console.log(status)
	});


	$scope.setWatch = function(watch) {
		console.log("Selected watch:", watch.first_name)
		$scope.currWatch = watch
	}
		
});



