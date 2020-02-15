angular.module('Angello.Storyboard')
    .controller('StoryboardCtrl', function( STORY_TYPES, StoriesModel){
        var storyboard = this;

        storyboard.types = STORY_TYPES;
        storyboard.users = {};

        storyboard.getStories = function(){
            StoriesModel.all().then(function(result){
                storyboard.stories = result;
            })
        }
        storyboard.stories = null;
        storyboard.getStories();
        // storyboard.stories = [
        //     {
        //         "assignee" : "1",
        //         "criteria" : "테스트1",
        //         "description" : "테스트입니다. ",
        //         "id" : "1",
        //         "reporter" : "2",
        //         "status" : "할 일",
        //         "title" : "첫 번째 스토리",
        //         "type" : "Spike"
        //     },
        //     {
        //         "assignee" : "2",
        //         "criteria" : "테스트2",
        //         "description" : "테스트입니다. ",
        //         "id" : "2",
        //         "reporter" : "1",
        //         "status" : "할 일",
        //         "title" : "두 번째 스토리",
        //         "type" : "Enhancement"
        //     }
        // ];

        
        storyboard.statuses = [
            { name : '할 일'},
            { name : '진행 중'},
            { name : '코드 리뷰'},
            { name : 'QA 리뷰'},
            { name : '검증 완료'}
        ]

        storyboard.currentStory = null;
        storyboard.editedStory = {};

        storyboard.setCurrentStory = function(story){
            storyboard.currentStory = story;
            storyboard.editedStory = angular.copy(storyboard.currentStory);

            
        }

        storyboard.updateStory = function(){
            var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];
            fields.forEach(function(field){
                storyboard.currentStory[field] = storyboard.editedStory[field];
            })

            storyboard.resetForm()
        }

        storyboard.updateCancel = function(){
            storyboard.resetForm();
        }

        storyboard.resetForm = function(){
            storyboard.currentStory = null;
            storyboard.editedStory = {};

            storyboard.detailsForm.$setPristine();
            storyboard.detailsForm.$setUntouched();

        }

        function ID(){
            return '_' + Math.random().toString(36).substr(2,9);
        };

        storyboard.createStory = function(){
            var newStory = angular.copy(storyboard.editedStory);
            newStory.id = ID();

            storyboard.stories.push(newStory);
            storyboard.resetForm();
        }

        storyboard.deleteStory = function(storyId){
            
            var findSameStoryId = (story) => story.id == storyId
            var targetIdx = storyboard.stories.findIndex(findSameStoryId);
            storyboard.stories.splice(targetIdx,1);

            storyboard.resetForm();
        }
    })