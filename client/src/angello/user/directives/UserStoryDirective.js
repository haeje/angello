angular.module('Angello.User')
    .directive('userstory', function($rootScope, StoriesModel, $log){
        var linker = function link(scope, element, attrs, con){

            element.on('mouseover', onMouseover)
            element.on('mouseout', onMouseout)
            
            function onMouseover(){
                element.css({'opacity' : 0.9})
            }
            function onMouseout(){
                element.css({'opacity' : 1.0})
            }
                
            
        };
        
        var controller = function($scope){
            
            var userStory = this;
            userStory.deleteStory = function(id){
                // StoriesModel.destroy(id)
                //     .then(function(result){
                //         $rootScope.$broadcast('storyDeleted');
                //         $log.debug('결과', result);
                //     }, function(reason){
                //         $log.debug('오류', reason);
                //     })
            }
        };

        return{
            restrict : 'A',
            controller : controller,
            controllerAs : 'userStory',
            link : linker
        };
    });
    