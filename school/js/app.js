

// Declare app level module which depends on views, and components
  console.log("--------app loaded--------");
angular.module('school', [
  'ngRoute',
  // 'ngValidate',
  'ui.bootstrap',
  'ngResource',
  'school.dashboard',
  'school.complete',
  'school.student'

]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});

}]);




