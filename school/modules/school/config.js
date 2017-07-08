var app = angular.module('school.complete', ['ngRoute', 'oc.lazyLoad'])
app.config(['$routeProvider', function($routeProvider) {
    /* Define Route */ 
    $routeProvider
        .when('/list-school', {
            templateUrl: 'modules/school/partials/list-school.html',
            controller: 'listSchoolCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'school',
                        files: ['modules/school/controllers/listSchool.js']
                    }]);
                }]
            }
        })

        .when('/add-school', {
            templateUrl: 'modules/school/partials/add-school.html',
            controller: 'addSchoolCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'add-school',
                        files: ['modules/school/controllers/addSchool.js']
                    }]);
                }]
            }
        })

        .when('/edit-school', {
            templateUrl: 'modules/school/partials/edit-school.html',
            controller: 'editSchoolCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'edit-school',
                        files: ['modules/school/controllers/editSchool.js']
                    }]);
                }]
            }
        });

}]);