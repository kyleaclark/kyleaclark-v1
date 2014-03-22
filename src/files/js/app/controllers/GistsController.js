angular.module("Napp").controller("GistsController", function ($scope, QueryService, DateService) {

  function init() {
    this.slidesResourceUrlPath = "js/domain/stores/slides/GistsSlides.json";

    $scope.gists = QueryService.resource(this.slidesResourceUrlPath).query();
    $scope.toJsDate = DateService.toJsDate;
  }

  init();
});