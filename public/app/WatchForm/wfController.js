app.controller('wfController', function wfController($scope, $http, DataService) {


		$scope.selectedWatch = {
			id: '',
			date: '',
			fromTime: '',
			toTime: ''
		}
		

		// JSON get
		DataService.getWatchIDs().then(function(data) {
			$scope.data = data;
			console.log($scope.data);
		});	

		// Form submission
		$scope.submitForm = function() {

			console.log($scope.selectedWatch.id);

			// Split up date and time
			var from = $scope.mergeDateTime($scope.selectedWatch.date, $scope.selectedWatch.fromTime);
			console.log(from);

			var to = $scope.mergeDateTime($scope.selectedWatch.date, $scope.selectedWatch.toTime);
			console.log(to);
		}


		$scope.mergeDateTime = function(date, time) {

			var day = new Date(date).getDate();
			var mon = new Date(date).getMonth()+1;
			var year = new Date(date).getFullYear();
			var hr = new Date(time).getHours();
			var min = new Date(time).getMinutes();

			var merged = year + ',' + mon + ',' + day + ' ' + hr + ':' + min;
			var newDate = new Date(merged);

			return newDate;

		}




	});