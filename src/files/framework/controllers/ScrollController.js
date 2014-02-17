app.controller('ScrollController', function ($scope, $location, $anchorScroll) {
  $scope.gotoBottom = function (el) {
    console.log("el : ", el);
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash(el);
    
    // call $anchorScroll()
    $anchorScroll();
  }
});