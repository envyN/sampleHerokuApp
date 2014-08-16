'use strict';

/* Controllers */

angular.module('hotspot.controllers', [])
        .controller('homePageCtrl', ['$scope', function($scope) {

            }])
        .controller('compareCtrl', ['$scope', function($scope) {
                $scope.sites = [
                    {name: 'Shimla', popularity: 'High Popularity'},
                    {name: 'Mussoorie', popularity: 'High Popularity'},
                    {name: 'Korba', popularity: 'Low Popularity'},
                    {name: 'Nainital', popularity: 'Low Popularity'},
                    {name: 'Leh', popularity: 'High Popularity'},
                    {name: 'McLeod Ganj', popularity: 'Low Popularity'}
                ];
                
            }]);
