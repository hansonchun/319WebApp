angular.module('DataService', [])

.factory('DataService', function($http, $q) {

	var factory = {};

	factory.getWatchIDs = function() {
		var temp = {};
		var defer = $q.defer();
		$http.get('data/MOCK_DATA2.json')
		.success(function(data, status, headers, config) {
			temp = data;
			console.log(data);
			defer.resolve(data);
		}).error(function(data, status, headers, config) {
			console.log(status);
		});
		return defer.promise;
	}


	return factory;
})