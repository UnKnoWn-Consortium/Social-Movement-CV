var app = angular.module('main', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'intro.html'
    }).when('/留守篇', {
        templateUrl: 'occupation.html',
        controller: 'occupationCtrl',
        controllerAs: 'ctrl'
    }).when('/行動篇', {
        templateUrl: 'action.html',
        controller: 'actionCtrl',
        controllerAs: 'ctrl'
    }).when('/裝備篇', {
        templateUrl: 'equipment.html',
        controller: 'equipmentCtrl',
        controllerAs: 'ctrl'
    }).when('/其他', {
        templateUrl: 'other.html',
        controller: 'otherCtrl',
        controllerAs: 'ctrl'
    }).when('/總得分', {
        templateUrl: 'total.html',
        controller: 'totalCtrl',
        controllerAs: 'ctrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('occupationCtrl', ['userSvc', function(userSvc){
    this.currentPage = 1;
    this.totalPages = 1;
    this.genPageNum = function(index) {
        return Math.ceil((index + 1) / 6);
    };
    this.getQuestions = function(){
        this.totalPages = Math.ceil(userSvc.getQuestions('occupation').length / 6);
        return userSvc.getQuestions('occupation');
    };
    this.getPoint = function(){
        return userSvc.getPoint('occupation');
    };
    this.updatePoint = function(question){
        userSvc.updatePoint('occupation', question);
    };
}]).controller('actionCtrl', ['userSvc', function(userSvc){
    this.currentPage = 1;
    this.totalPages = 1;
    this.genPageNum = function(index){
        return Math.ceil((index + 1) / 6);
    };
    this.getQuestions = function(){
        this.totalPages = Math.ceil(userSvc.getQuestions('action').length / 6);
        return userSvc.getQuestions('action');
    };
    this.getPoint = function(){
        return userSvc.getPoint('action');
    };
    this.updatePoint = function(question){
        userSvc.updatePoint('action', question);
    };
}]).controller('equipmentCtrl', ['userSvc', function(userSvc){
    this.currentPage = 1;
    this.totalPages = 1;
    this.genPageNum = function(index){
        return Math.ceil((index + 1) / 6);
    };
    this.getQuestions = function(){
        this.totalPages = Math.ceil(userSvc.getQuestions('equipment').length / 6);
        return userSvc.getQuestions('equipment');
    };
    this.getPoint = function(){
        return userSvc.getPoint('equipment');
    };
    this.updatePoint = function(question){
        userSvc.updatePoint('equipment', question);
    };
}]).controller('otherCtrl', ['userSvc', function(userSvc){
    this.currentPage = 1;
    this.totalPages = 1;
    this.genPageNum = function(index){
        return Math.ceil((index + 1) / 6);
    };
    this.getQuestions = function(){
        this.totalPages = Math.ceil(userSvc.getQuestions('other').length / 6);
        return userSvc.getQuestions('other');
    };
    this.getPoint = function(){
        return userSvc.getPoint('other');
    };
    this.updatePoint = function(question){
        userSvc.updatePoint('other', question);
    };
}]).controller('totalCtrl', ['$location', '$window', 'userSvc', function($location, $window, userSvc){
    this.getPoint = function(){
        return userSvc.getPoint();
    };
    this.reload = function(){
        $location.path('/');
        $window.location.reload();
    }
}]);

app.factory('userSvc', [function(){
    var user = {
        questions: {
            occupation: [{
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
            }],
            action: [{
                text: "轉學生相／黃絲pro pic",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "食催淚彈",
                type: "bin",
                point: 50,
                ans: false
            }, {
                text: "聞催淚彈",
                type: "bin",
                point: 20,
                ans: false
            }, {
                text: "起路障",
                type: "bin",
                point: 10,
                ans: false
            }, {
                text: "推鐵馬",
                type: "bin",
                point: 15,
                ans: false
            }, {
                text: "救人",
                type: "bin",
                point: 20,
                ans: false
            }, {
                text: "食胡椒",
                type: "bin",
                point: 10,
                ans: false
            }, {
                text: "被捕",
                type: "bin",
                point: -5,
                ans: false
            }, {
                text: "追打警渣",
                type: "bin",
                point: 20,
                ans: false
            }, {
                text: "整盾",
                type: "bin",
                point: 40,
                ans: false
            }, {
                text: "於Lennon wall貼Post-it",
                type: "bin",
                point: -20,
                ans: false
            }, {
                text: "唱K",
                type: "bin",
                point: -30,
                ans: false
            }, {
                text: "守物資站",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "搬物資",
                type: "bin",
                point: 10,
                ans: false
            }, {
                text: "揸咪講話（大台以外）",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "塗鴉",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "燒劉江華",
                type: "bin",
                point: 50,
                ans: false
            }, {
                text: "寫文宣揚抗爭理念",
                type: "bin",
                point: 2,
                ans: false
            }, {
                text: "網台節目宣揚抗爭理念",
                type: "bin",
                point: 2,
                ans: false
            }, {
                text: "出書",
                type: "bin",
                point: 3,
                ans: false
            }, {
                text: "接受訪問",
                type: "bin",
                point: 1,
                ans: false
            }],
            equipment: [{
                text: "有黑衣／長褲",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "有面罩",
                type: "bin",
                point: 10,
                ans: false
            }, {
                text: "有普通口罩",
                type: "bin",
                point: 5,
                ans: false
            }, {
                text: "有N95口罩",
                type: "bin",
                point: 10,
                ans: false
            }, {
                text: "有甲",
                type: "bin",
                point: 30,
                ans: false
            }, {
                text: "有頭盔",
                type: "bin",
                point: 25,
                ans: false
            }, {
                text: "有盾",
                type: "bin",
                point: 30,
                ans: false
            }, {
                text: "有眼罩",
                type: "bin",
                point: 10,
                ans: false
            }],
            other: [{
                text: "參與光復",
                type: "time",
                point: 5,
                ans: 0
            }]
        },
        points: {
            occupation: 0,
            action: 0,
            equipment: 0,
            other: 0
        }
    };
    return {
        getQuestions: function(sect){
            return user.questions[sect];
        },
        getPoint: function(sect){
            if (!!sect){
                return user.points[sect];
            }else{
                var sum = 0;
                for (key in user.points){
                    sum += user.points[key];
                }
                return sum;
            }
        },
        updatePoint: function(sect, question){
            if (question.type == "bin"){
                if (question.ans){
                    user.points[sect] += question.point;
                }else{
                    user.points[sect] -= question.point;
                }
            }else if (question.type == "time"){
                if (question.ans){
                    user.points[sect] = 0;
                    user.points[sect] += question.point * question.ans;
                }
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