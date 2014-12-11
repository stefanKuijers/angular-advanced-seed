angular.module('aas.controller.myProfile', ['project.service.api'])
    .controller('MyProfileCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
        console.log( "My profile controller" );
    }]
);