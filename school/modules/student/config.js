var app = angular.module('school.student', ['ngRoute', 'oc.lazyLoad'])
app.config(['$routeProvider', function($routeProvider) {
   
    /* Define Route */ 
    $routeProvider
        .when('/list-student', {
            templateUrl: 'modules/student/partials/list-student.html',
            controller: 'listStudentCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'student',
                        files: ['modules/student/controllers/listStudent.js']
                    }]);
                }]
            }
        })

        .when('/add-student', {
            templateUrl: 'modules/student/partials/add-student.html',
            controller: 'addStudentCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'add-student',
                        files: ['modules/student/controllers/addStudent.js']
                    }]);
                }]
            }
        })

        .when('/edit-student', {
            templateUrl: 'modules/student/partials/edit-student.html',
            controller: 'editStudentCtrl',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'edit-student',
                        files: ['modules/student/controllers/editStudent.js']
                    }]);
                }]
            }
        });

}]);