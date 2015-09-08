var app = angular.module('main', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'intro.html'
    }).when('/留守篇', {
        templateUrl: 'occupation.html'
    }).when('/行動篇', {
        templateUrl: 'action.html'
    }).when('/裝備篇', {
        templateUrl: 'equipment.html'
    }).when('/總得分', {

    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('occupationCtrl', ['userSvc', function(userSvc){
    this.questions = [{
        text: "參與罷課",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "於金鐘佔領區留守",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "於旺角佔領區留守",
        type: "bin",
        point: 15,
        ans: false
    }, {
        text: "於銅鑼灣佔領區留守",
        type: "bin",
        point: 10,
        ans: false
    }, {
        text: "於尖沙咀佔領區留守",
        type: "bin",
        point: 10,
        ans: false
    }, {
        text: "926/927在場",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "928在場",
        type: "bin",
        point: 20,
        ans: false
    }, {
        text: "1001升旗日在場",
        type: "bin",
        point: 15,
        ans: false
    }, {
        text: "1001升旗日舉交叉手勢",
        type: "bin",
        point: -20,
        ans: false
    }, {
        text: "1003旺角黑夜在場",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "1003與黑社會正面交鋒",
        type: "bin",
        point: 50,
        ans: false
    }, {
        text: "1017重奪旺角在場",
        type: "bin",
        point: 10,
        ans: false
    }, {
        text: "1105參與V煞遊行",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "1118衝擊立會",
        type: "bin",
        point: 10,
        ans: false
    }, {
        text: "1130升級日在場",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "尖沙咀清場在場",
        type: "bin",
        point: 5,
        ans: false
    }, {
        text: "旺角清場時在場",
        type: "bin",
        point: 10,
        ans: false
    }, {
        text: "銅鑼灣清場時在場",
        type: "bin",
        point: 1,
        ans: false
    }, {
        text: "金鐘清場時在場",
        type: "bin",
        point: 1,
        ans: false
    }];
    this.getPoint = function(){
        return userSvc.getPoint('occupation');
    };
    this.updatePoint = function(question){
        userSvc.updatePoint('occupation', question);
    };
}]);

app.factory('userSvc', [function(){
    var user = {
        points: {
            occupation: 0,
            action: 0,
            equipment: 0
        }

    };
    return {
        getPoint: function(sect){
            if (!!sect){
                var sum = 0;
                for (key in user.points){
                    sum += user.points[key];
                }
                return sum;
            }else{
                return user.points[sect];
            }
        },
        updatePoint: function(sect, question){
            if (question.ans){
                user.points[sect] += question.point;
            }else{
                user.points[sect] -= question.point;
            }
        }
    }
}]);

app.filter('posNegNumFilter', [function(){
    return function(input){
        if(input >=0){
            return ('+ ' + input);
        }else{
            return ('- ' + Math.abs(input));
        }
    }
}]).filter('posNegNumClassFilter', [function(){
    return function(input){
        if(input >=0){
            return {positive: true};
        }else{
            return {negative: true};
        }
    }
}]);