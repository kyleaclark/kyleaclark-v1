angular.module("Napp").controller("HomeController", function ($scope, $route, $routeParams, $location, QueryService) {

  function init() {
    this.slidesResourceUrlPath = "js/domain/stores/slides/HomeSlides.json";

    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.slides = QueryService.resource(this.slidesResourceUrlPath).query();
  }
  
  init();

});