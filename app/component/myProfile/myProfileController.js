angular.module('aas.component.myProfile.controller', ['aas.shared.api.service'])
    .controller('MyProfileController', ['API', function(API) {
        var vm = this;
        console.log( "My profile controller" );
    }]
);