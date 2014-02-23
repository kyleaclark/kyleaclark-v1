/*** GISTS CONTROLLER ***/

angular.module("PortfolioApp").controller("GistsController", function ($scope, GistsService) {

  function init() {
    $scope.gists = GistsService.getGists();
    $scope.navScroll = "gists";
  }

  init();
});