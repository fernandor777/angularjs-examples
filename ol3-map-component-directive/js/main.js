/* 
 * Origami solutions
 */

var contextName = "smb-inmobiliaria";
var maporgm;

var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);

app.controller("myCtrl", function($scope) {
    var ctrl = this;
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    /*
    angular.element(document).ready(function () {
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
    });*/

    
});

app.directive("ol3map", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.append('<div class="map"></div>');
            scope.map = new ol.Map({
                target: element.find('div')[0],
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
            
        }

    };
});

app.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/'+contextName+'/pages/main.html',
                controller  : 'myCtrl'
            })

            // route for ol3 map in directive
            .when('/testdir', {
                templateUrl : 'pages/ol3dir.html',
                controller  : 'myCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });
    

app.component('map3',{
    controller: function($scope, $element, $attrs){
        var ctrl = this;
        
        $scope.map = null;
        
        // it works either $postLink or $onInit, but $postLink is the recommended way 
        // see http://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html
        ctrl.$postLink = function(){
            $scope.map = new ol.Map({
                target: $element.find('div')[0],
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
        };
        //console.dir($scope);
    },
    template: function($element, $attrs){
        return '<div class="map"> </div>';
    }
    

});


