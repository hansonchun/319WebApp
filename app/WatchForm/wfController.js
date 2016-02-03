app.controller('wfController', function wfController($scope, $http) {


		$scope.selectedWatch = {
			id: '',
			date: '',
			fromTime: '',
			toTime: ''
		}
		

		// JSON get
		$http.get('data/MOCK_DATA.json').
		success(function(data, status, headers, config) {
						$scope.data = data
						console.log($scope.data);
				}).
		error(function(data, status, headers, config){
				console.log(status)
		});

		// Form submission
		$scope.submitForm = function() {

			console.log($scope.selectedWatch.id);
			console.log($scope.selectedWatch.date);
			console.log($scope.selectedWatch.fromTime);

			// Split up date and time
			var from = $scope.mergeDateTime($scope.selectedWatch.date, $scope.selectedWatch.fromTime);
			console.log(from);

			var to = $scope.mergeDateTime($scope.selectedWatch.date, $scope.selectedWatch.toTime);
			console.log(to);
		}


		$scope.mergeDateTime = function(date, time) {

			var day = new Date(date).getDate();
			var mon = new Date(date).getMonth()+1;
			var year = new Date(date).getYear();
			var hr = new Date(time).getHours();
			var min = new Date(time).getMinutes();

			var merged = year + ',' + mon + ',' + day + ' ' + hr + ':' + min;
			var newDate = new Date(merged);

			return newDate;

		}




	});