angular.module(
	'aas.router', 
	[
		'aas.component.home.controller',
        'aas.component.project.controller',
		'aas.component.myProfile.controller',
	]
).config(
	['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url:                     '/',
				controller:              'HomeController',
                controllerAs:            'homeCtrl',
				templateUrl:             'app/component/home/homeView.html'
			})
            .state('project', {
                url:                     '/project/:id',
                controller:              'ProjectController',
                controllerAs:            'projectCtrl',
                templateUrl:             'app/component/project/projectView.html'
            })
			.state('my-profile', {
				url:                     '/my-profile',
				controller:              'MyProfileController',
                controllerAs:            'myProfileCtrl',
				templateUrl:             'app/component/myProfile/myProfileView.html'
			})
		;

		$urlRouterProvider.otherwise('/');
	}]
);