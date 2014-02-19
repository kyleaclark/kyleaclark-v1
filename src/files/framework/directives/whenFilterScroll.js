app.directive('whenFilterScroll', function ($window) {

  var 
    $ = angular.element,
    $scope,
    el = [],
    index = 0;

  function filterScroll($scopeParam, $elParam) {
    $scope = $scopeParam;
    el[index] = $elParam;
    index += 1;
    bindScrollEvent();
  }

  function bindScrollEvent() {
    $($window).bind('scroll', function () {
      console.log("scroll");
      onScrollEvent();  
    });
  }

  function onScrollEvent() {
    var 
      length = el.length,
      scrollPosition = 0,
      slide = "",
      navSlideEl = "",
      height = 0;

    scrollPosition = $(window).scrollTop();

    for (var i = 0; i < length; i++) {
      height += el[i].height();

      if (height - scrollPosition > 0) {
        slide = el[i].attr("data-slide");
        navSlideEl = "[data-navSlide=" + slide + "]";

        if (!$(navSlideEl).hasClass("nav-slide-active")) {
          $(".nav-slide-active").removeClass("nav-slide-active");
          $(navSlideEl).addClass("nav-slide-active");
        }
        
        break;
      }
    }
  }

  return filterScroll;
});