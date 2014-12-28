angular.module('aas.component.home.controller', ['aas.shared.api.service'])
    .controller('HomeCtrl', ['$scope', '$filter', 'API', function($scope, $filter, API) {
        var vm = this;

        vm.foo = "bar";
        vm.count = 1;

        vm.add = function( value ) {
            vm.count += value;
        };
    }]
);