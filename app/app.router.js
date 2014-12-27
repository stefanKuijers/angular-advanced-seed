angular.module(
	'aas.router', 
	[
		'aas.component.home.controller',
		'aas.component.myProfile.controller'
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