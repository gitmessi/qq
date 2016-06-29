var app=angular.module('myApp',['ngRoute']);
//定义路由表
//写信 xx  ----page_1.html
//收信 hx  ----page_2.html
//联系人 lxr  ----page_3.html
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/xx',{
		templateUrl:'pages/page_1.html'
	}).when('/hx',{
		templateUrl:'pages/page_2.html'
	}).when('/lxr',{
		templateUrl:'pages/page_3.html'
	}).when('/',{
		templateUrl:'pages/shouye.html'
	}).otherwise({redirectTo:'/'});
}])