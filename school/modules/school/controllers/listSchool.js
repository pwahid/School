angular.module('school.complete').controller('listSchoolCtrl', ['$scope', '$http',function($scope, $http) {

    console.log("dashboard loaded");

$http({
         method: 'GET',
         url: 'http://192.168.1.8/school-system/school-api/school',
         headers: { 
          'Authorization': 'Basic YWRtaW46MTIzNA==',
          'Username': 'admin', 
          'Password': '1234' 
         },
     }).then(function successCallback(response) {
         if (response.status == 200) {
          $scope.schools = response.data;
         }else{
          $scope.schools = [];
         }
     }, function errorCallback(response) {
         console.log(response);
     });

}]);
