angular
    .module('aas.shared.directives.searchbox.directive', [
        'aas.shared.api.service'
    ])
    .directive('aasSearchbox', ['$timeout', 'API', function($timeout, API) {

        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'app/shared/directives/searchbox/searchboxView.html',

            link: function($scope, $element, $attrs) {
                $scope.autoSearch         = $attrs.autoSearch || true;
                $scope.searchDelayTime    = $attrs.searchDelayTime || 350;
                $scope.placeholder      = $attrs.placeholder || "Search for...";

                $scope.searchDelayPromise = false;
                $scope.searching        = false;

                $scope.userInput = function() {
                    console.log( $scope.searchterm, $scope.autoSearch );

                    if ( $scope.autoSearch ) {
                        console.log("auto search is on");
                        if ($scope.searchDelayPromise) 
                            $timeout.cancel( $scope.searchDelayPromise );

                        $timeout( function() {
                            console.log("delay is over lets search");
                            $scope.search();
                        }, 350 );
                    }
                };

                $scope.search = function() {
                    console.log("Directive: search called");
                    $scope.searching = true;

                    API.search( $scope.searchterm ).then( function( response ) {
                        $results = response;

                        $scope.searching = false;
                    }, function () {
                        console.log("But... you promised!");
                    });
                };
            }
        }; 
}]);

