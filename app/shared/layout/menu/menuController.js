angular
    .module('aas.shared.layout.menu.controller', [
        'aas.shared.directives.searchbox.directive'
    ])
    .controller('MenuController', [ function() {
        var vm = this;

        vm.searchterm = "wooooooooooooooooo";

        vm.active = 0;

        // mock that the projects are taken from the server. No authentication needed
        vm.projects = [
            { 'sref': 'project( {id:1} )', 'title': "Project A" },
            { 'sref': 'project( {id:2} )', 'title': "Project B" },
            { 'sref': 'project( {id:3} )', 'title': "Project C" }
        ];

        vm.setActive = function( value ) {
            vm.active = value;
        };

        vm.isActive = function( value ) {
            return vm.active === value;
        };
    } ]
);