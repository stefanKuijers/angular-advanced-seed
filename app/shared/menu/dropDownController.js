angular.module('aas.controller.menu.dropDown',[])
	.controller('DropdownCtrl', ['$scope', '$log', function ($scope, $log) {
		$scope.status = {
			isopen: false
		};

		$scope.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};
	}]
);