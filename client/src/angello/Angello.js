console.log('angello.js');

var myModule = angular.module('Angello',
    [
        'ngRoute',
        'Angello.Common',
    ]);

myModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'src/angello/storyboard/tmpl/storyboard.html',
        controller: 'StoryboardCtrl',
        controllerAs: 'storyboard',
        requiresLogin: true
    })
    .when('/dashboard', {
        templateUrl: 'src/angello/dashboard/tmpl/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        requiresLogin: true
    })
    .when('/users', {
        templateUrl: 'src/angello/user/tmpl/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users',
        requiresLogin: true
    })
    .when('/users/:userId', {
        templateUrl: 'src/angello/user/tmpl/user.html',
        controller: 'UserCtrl',
        controllerAs: 'myUser',
        requiresLogin: true,
        resolve: {
            user: function ($route, $routeParams, UsersModel) {
                var userId = $route.current.params['userId']
                           ? $route.current.params['userId']
                           : $routeParams['userId'];
                return UsersModel.fetch(userId);
            },
            stories: function ($rootScope, StoriesModel) {
                return StoriesModel.all();
            }
        }
    })
    .when('/login', {
        templateUrl: 'src/angello/login/tmpl/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
    })
        .otherwise({redirectTo : '/'})
})