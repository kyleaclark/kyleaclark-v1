app.controller('HomeController', function ($scope, $route, $routeParams, $location) {

  function init () {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }
  
  init();

});