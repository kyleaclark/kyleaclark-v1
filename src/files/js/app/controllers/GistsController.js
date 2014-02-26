/*** GISTS CONTROLLER ***/

angular.module("PortfolioApp").controller("GistsController", function ($scope, QueryService) {

  function init() {
  	this.slidesResourceUrlPath = "js/domain/stores/slides/GistsSlides.json";

    $scope.gists = QueryService.resource(this.slidesResourceUrlPath).query();
    $scope.navScroll = "gists";
  }

  init();
});