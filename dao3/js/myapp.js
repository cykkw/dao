
var myapp=angular.module("Myapp",['ngRoute']);
myapp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{          //首页
        templateUrl: '/templates/index1.html'
    }).when('/picindex',{                 //图片集索引
        templateUrl:'/pages/index.html'
    }).when('/1',{
        templateUrl:'/pages/1.html'
    }).when('/2',{
        templateUrl:'/pages/2.html'
    }).when('/3',{
        templateUrl:'/pages/3.html'
    }).when('/4',{
        templateUrl:'/pages/4.html'
    }).when('/5',{
        templateUrl:'/pages/5.html'
    }).when('/6',{
        templateUrl:'/pages/6.html'
    }).when('/7',{
        templateUrl:'/pages/7.html'
    }).when('/8',{
        templateUrl:'/pages/8.html'
    }).when('/9',{
        templateUrl:'/pages/9.html'
    }).when('/index1', {
        templateUrl: 'templates/index1.html'
    }).when('/index2', {
        templateUrl: 'templates/index2.html'
    }).when('/index3', {
        templateUrl: 'templates/index3.html'
    }).when('/index4', {
        templateUrl: 'templates/index4.html'
    }).when('/index5', {
        templateUrl: 'templates/index5.html'
    }).when('/index6', {
        templateUrl: 'templates/index6.html'
    }).otherwise('/index1');

}]);