angular.module('Angello.Common')
    .service('LoadingService', function($rootScope){
        var service = this;

        service.setLoading = function(loading){
            $rootScope.loadingView = loading;
        }
    })

angular.module('Angello.Common')
    .factory('LoadingService', function($rootScope){
        var setLoading = function( loading ){
            $rootScope.loadingView = loading;
        }

        return {
            setLoading : setLoading
        }
    })