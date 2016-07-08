/* 
 * Origami solutions
 */

var contextName = "smb-inmobiliaria";

var app = angular.module("myApp", ['ngRoute']);

app.controller("myCtrl", function($scope) {
    
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    
});

app.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/'+contextName+'/pages/main.html',
                controller  : 'myCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });



