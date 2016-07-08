/* 
 * Origami solutions
 */

var contextName = "smb-inmobiliaria";
var maporgm;

var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);

app.controller("myCtrl", function($scope) {
    
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    
    angular.element(document).ready(function () {
        //document.getElementById('msg').innerHTML = 'Hello';
        maporgm = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-79.8649, -2.1413 ]),
          zoom: 15
        })
      });
    });

    
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



