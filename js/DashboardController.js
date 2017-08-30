angular.module('dashboard', [])
  .controller('DashboardController', function($http) {

    console.log('teste');

    var req = {
     method: 'GET',
     url: 'https://deals-crawler.herokuapp.com/hardmob',
     headers: {
       'Content-Type': 'application/json'
     }
    }

    $http(req)
    .then(function(response){
      console.log(response);
    });


  });
