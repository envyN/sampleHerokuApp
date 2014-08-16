'use strict';


// Declare app level module which depends on filters, and services
angular.module(
        'hotspot', [
            'ui.router',
            'hotspot.filters',
            'hotspot.services',
            'hotspot.directives',
            'hotspot.controllers'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                    .state('home', {
                        url: "/",
                        views: {
                            'rootView': {
                                templateUrl: './partials/landingPage.html',
                                controller: 'homePageCtrl'
                            }
                        }
                    })
                    .state('about', {
                        url: "/about",
                        views: {
                            'rootView': {
                                templateUrl: './partials/about.html',
                                controller: function($scope) {

                                }//homePageCtrl
                            }
                        }
                    })
                    .state('contact', {
                        url: "/contact",
                        views: {
                            'rootView': {
                                templateUrl: './partials/landingPage.html',
                                controller: function($scope) {

                                }//homePageCtrl
                            }
                        }
                    })
                    .state('compare', {
                        url: "/compare",
                        views: {
                            'rootView': {
                                templateUrl: './partials/compare.html',
                                controller: 'compareCtrl'
                            }
                        }
                    });
////        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
////        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
////        $routeProvider.otherwise({redirectTo: '/view1'});
        });
