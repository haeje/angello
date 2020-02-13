angular.module('Angello.Common')
    .controller('MainCtrl', function(StoriesModel, STORY_TYPES){
        var vm = this;

        vm.data = STORY_TYPES;
        vm.model = StoriesModel.MODEL;
    })