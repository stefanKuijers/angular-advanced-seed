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
				templateUrl:             'app/component/home/homeView.html'
			})
			.state('my-profile', {
				url:                     '/my-profile',
				controller:              'MyProfileCtrl',
				templateUrl:             'app/component/myProfile/myProfileView.html'
			})
		;

		$urlRouterProvider.otherwise('/');
	}]
);