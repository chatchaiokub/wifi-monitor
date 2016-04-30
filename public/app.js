var angular = angular.module('wifiApp', [])
  .controller('wifiController', function ($scope, $http) {

    $http.get('/data').then(function (response) {
      $scope.WiFiData = response.data
      console.log(response.data)
    })
  })
