angular.module(
   'aas', 
   [
      'ui.router',
      'ui.bootstrap',
      'aas.router'
      // 'aas.controller.menu.dropDown'
   ]
).run(['$rootScope', function( $rootScope ) {
         console.log( "app init" );
         
         
         $rootScope.testValue = [1,2,3];
      }
   ]
);