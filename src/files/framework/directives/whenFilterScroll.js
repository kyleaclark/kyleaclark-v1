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
      onScrollEvent();  
    });
  }

  function onScrollEvent() {
    var 
      length = el.length,
      scrollPosition = 0,
      documentHeight = 0,
      windowheight = 0,
      slide = "",
      navSlideEl = "",
      height = 0;

    scrollPosition = $(window).scrollTop();
    documentHeight = $(document).height();
    windowHeight = $(window).height();

    if (scrollPosition === 0) {
      if (!$("[data-navSlide=navTop]").hasClass("nav-slide-active")) {
        $(".nav-slide-active").removeClass("nav-slide-active");
        $("[data-navSlide=navTop]").addClass("nav-slide-active");
      }
      return;
    }

    for (var i = 0; i < length; i++) {
      height += el[i].height();

      if ((i === length - 2) && (scrollPosition + windowHeight === documentHeight)) {
        updateNavSlideActive(i+1);
        break;
      } else if (height - scrollPosition > 0) {
        updateNavSlideActive(i);
        break;
      }
    }

    function updateNavSlideActive(i) {
      slide = el[i].attr("data-slide");
      navSlideEl = "[data-navSlide=" + slide + "]";

      if (!$(navSlideEl).hasClass("nav-slide-active")) {
        $(".nav-slide-active").removeClass("nav-slide-active");
        $(navSlideEl).addClass("nav-slide-active");
      }
    }
  }

  return filterScroll;
});