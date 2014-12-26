describe('AAS: HomeCtrl', function() {
    // Load the module with MainController
    beforeEach(module('aas'));

    var homeController, scope;

    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach( inject( function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();

        
        homeController = $controller('HomeCtrl', {
            $scope: scope
        });
    }));


    it('should have a function called add which adds stuff to scope.count', function() {
            expect(scope.add).toBeDefined();

            // add spy
            spyOn( scope, 'add' ).and.callThrough();

            // call and ask spy
            scope.add( 2 );
            expect(scope.add).toHaveBeenCalledWith( 2 );
            
            expect(scope.count).toBe( 3 );
    });

    it('should have a property foo set to the instance of the controller', function() {
            expect(homeController.foo).toBeDefined();
    });
});