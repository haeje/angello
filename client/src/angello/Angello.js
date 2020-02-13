var myModule = angular.module('Angello',
    [
        'ngRoute',
        'Angello.Common',
        'Angello.Storyboard',
        'Angello.User'
    ]);


myModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'src/angello/storyboard/tmpl/storyboard.html',
        controller: 'StoryboardCtrl',
        controllerAs: 'storyboard',
        requiresLogin: true
    })
    .otherwise({redirectTo : '/'})
})


myModule.value('STORY_TYPES', [
    {name: '기능'},
    {name: '개선'},
    {name: '버그'},
    {name: '스파이크'}
]);

// myModule.factory('loadingInterceptor', function(LoadingService){
//     var loadingInterceptor = {
//         request : function(config)
//     }
// })