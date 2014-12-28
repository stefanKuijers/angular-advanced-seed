angular.module('aas.component.home.controller', ['aas.shared.api.service'])
    .controller('HomeController', ['API', function(API) {
        var vm = this;

        vm.homeMessage = "Hello";

        vm.helloTo = function( subject ) {
            return vm.homeMessage + " " + subject;
        };
    }]
);