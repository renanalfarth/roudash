angular.module('dashboard', [])
  .controller('DashboardController', function($scope, $http) {

    console.log('teste');

    var req = {
     method: 'GET',
     url: 'http://deals-crawler.herokuapp.com/hardmob'
    }

    $http(req)
    .then(function(response){
      $scope.hardmob = response.data[0].itens;
    });


  });
