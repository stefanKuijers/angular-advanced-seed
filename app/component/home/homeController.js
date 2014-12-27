angular.module('aas.component.home.controller', ['aas.shared.api.service'])
    .controller('HomeCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
        console.log( "Home controller" );

        this.foo = "bar";
        
        $scope.count = 1;

        $scope.add = function( value ) {
            $scope.count += value;
        };
    }]
);