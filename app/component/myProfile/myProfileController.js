angular.module('aas.component.myProfile.controller', ['aas.shared.api.service'])
    .controller('MyProfileCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
        var vm = this;
        console.log( "My profile controller" );
    }]
);