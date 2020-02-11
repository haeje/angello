angular.module('Angello.Stroyboard')
    .controller('StroyboardCtrl', function(){
        var storyboard = this;

        storyboard.stories = [
            {
                "assignee" : "1",
                "criteria" : "테스트1",
                "description" : "테스트입니다. ",
                "id" : "1",
                "reporter" : "2",
                "status" : "할 일",
                "title" : "첫 번째 스토리",
                "type" : "스파이크"
            },
            {
                "assignee" : "2",
                "criteria" : "테스트2",
                "description" : "테스트입니다. ",
                "id" : "2",
                "reporter" : "1",
                "status" : "할 일",
                "title" : "두 번째 스토리",
                "type" : "개선"
            }
        ];

        storyboard.statuses = [
            { name : '할 일'},
            { name : '진행 중'},
            { name : '코드 리뷰'},
            { name : 'QA 리뷰'},
            { name : '검증 완료'}
        ]
    })