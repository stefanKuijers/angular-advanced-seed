angular.module(
   'aas', 
   [
      'aas.router'
   ]
).run(['$rootScope', function( $rootScope ) {
         console.log( "app init" );
      }
   ]
);