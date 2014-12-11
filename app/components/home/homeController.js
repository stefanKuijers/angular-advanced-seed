angular.module('aas.controller.home', ['project.service.api'])
    .controller('HomeCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
       console.log( "Home controller" );
    }]
);