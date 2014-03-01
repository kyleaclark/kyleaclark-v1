angular.module("Napp").controller("ProjectsController", function ($scope, QueryService) {

  function init() {
    this.slidesResourceUrlPath = "js/domain/stores/slides/ProjectsSlides.json";

    $scope.projects = QueryService.resource(this.slidesResourceUrlPath).query();
    $scope.navScroll = "projects";
  }

  init();
});