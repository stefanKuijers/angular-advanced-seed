window.App = angular.module(
    'aas', 
    [
      'ngAnimate',

      'ui.router',
      'ui.bootstrap',

      'aas.router',
      'aas.shared.layout.menu.controller'
    ]
).run(['$rootScope', function( $rootScope ) {
        console.log( "app init" );
    }]
);