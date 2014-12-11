angular.module(
   'aas', 
   [
      'ui.router',
      'aas.router'
   ]
).run(['$rootScope', function( $rootScope ) {
         console.log( "app init" );
      }
   ]
);