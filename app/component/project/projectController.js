angular
    .module('aas.component.project.controller', ['aas.shared.api.service'])
    .controller('ProjectController', ['$stateParams', 'API', function( $stateParams, API ) {
        var vm = this;

        vm.project = {
            id: $stateParams.id
        };

        
    }]
);