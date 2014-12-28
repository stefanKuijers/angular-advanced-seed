describe('AAS: HomeCtrl -', function() {

    beforeEach(module('aas'));

    var homeCtrl;

    beforeEach( inject( function($controller, $rootScope) {
        scope = $rootScope.$new();

        homeCtrl = $controller('HomeController', {
            '$scope': scope
        });

        sinon.spy(homeCtrl, 'helloTo');
    }));

    describe('On initialization', function() {

        it('should have a message set to value "Hello"', function() {
            expect( homeCtrl.homeMessage ).to.equal( 'Hello' );

        });

        it('should illustrate a sinon spy', function() {
            expect( homeCtrl.helloTo( "you" ) ).to.equal( "Hello you" );

            expect(homeCtrl.helloTo.args[0][0]).to.equal('you');

        });
    });
});