angular.module('school.dashboard', ['ngRoute','oc.lazyLoad'])

.config(['$routeProvider', function($routeProvider) {
    console.log("dashboard config loaded");
    $routeProvider

    .when('/dashboard', {
        templateUrl: 'modules/dashboard/partials/dashboard.html',
        controller: 'dashboardCtrl',
        resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    console.log("dashboard url config loaded");
                    return $ocLazyLoad.load([{
                        name: 'school',
                        files: ['modules/dashboard/controllers/dashboard.js']
                    }]);
                }]
            }
    });
}]);