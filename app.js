
var app = angular.module('WebApp', ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl:"app/home.html",
			controller: "HomeController"
		})
		.when("/getWatchForm", {
			templateUrl:"app/WatchForm/wfTemplate.html",
			controller: "wfController"
		})
		.otherwise({
			redirectTo:"/home"
		});
})




app.controller("HomeController", function($scope, $location) {

	$scope.getWatchData = function() {
		$location.path("/getWatchForm");
	}
})
