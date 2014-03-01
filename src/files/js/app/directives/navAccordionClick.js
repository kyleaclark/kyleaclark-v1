angular.module("Napp").directive("navAccordionClick", function () {
  var $ = angular.element;
  
  function link ($scope, $el, $location) {
    var timer = 0;

    $el.on("click", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        $("#nav-btn").prop("checked", false);
      }, 1000);
    });
  }

  return {
    restrict: 'A',
    link: link
  }
});