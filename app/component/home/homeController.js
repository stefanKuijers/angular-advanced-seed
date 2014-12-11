angular.module('aas.controller.home', ['aas.service.api'])
    .controller('HomeCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
       console.log( "Home controller" );
    }]
);