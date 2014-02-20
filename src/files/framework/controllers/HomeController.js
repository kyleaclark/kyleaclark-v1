app.controller('HomeController', function ($scope, $route, $routeParams, $location, SlidesService) {

  function init () {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.slides = SlidesService.getHomeSlides();
  }
  
  init();

});