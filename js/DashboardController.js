angular.module('dashboard', [])
  .controller('DashboardController', function($scope, $http) {

    $http({ method: 'GET', url: 'http://deals-crawler.herokuapp.com/hardmob' })
    .then(function(response){
      $scope.hardmob = response.data[0].itens;
    });

    $http({ method: 'GET', url: 'http://deals-crawler.herokuapp.com/weather' })
    .then(function(response){
      if(response.data != 'error') {
        $scope.weathers = response.data;
      } else {
        $scope.weathers = [];
      }
    });

  });
