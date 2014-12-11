angular.module('aas.controller.myProfile', ['aas.service.api'])
    .controller('MyProfileCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
        console.log( "My profile controller" );
    }]
);