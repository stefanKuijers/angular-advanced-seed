angular.module(
	'aas.router', 
	[
		'aas.controller.home',
		'aas.controller.myProfile'
	]
).config(
	['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url:                     '/',
				controller:              'HomeCtrl',
				templateUrl:             'components/home/home.html'
			})
			.state('my-profile', {
				url:                     '/my-profile',
				controller:              'MyProfileCtrl',
				templateUrl:             'components/myProfile/my-profile.html'
			})
		;

		$urlRouterProvider.otherwise('/');
	}]
);