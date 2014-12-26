describe('AAS: app.module.js', function() {
    // Load the module with MainController
    beforeEach(module('aas'));

    var scope;

    beforeEach( inject( function($controller, $rootScope) {
        scope = $rootScope.$new();
    }));


    it('should have testValue on rootScope', function() {
        expect(scope.testValue).toBeDefined();

        expect(scope.testValue.length).toEqual( 3 );
    });
});