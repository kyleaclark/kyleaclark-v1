app.directive("userScrollEvent", function ($window) {

  var 
    $ = angular.element,
    $scope = {},
    navScroll = "",
    el = [],
    timer = 0,
    index = 0;

  function UserScrollEvent($scopeParam, $elParam) {
    $scope = $scopeParam;
    this.navScroll = $scope.navScroll;

    // Reset el array if in different scope.navScroll
    if (this.navScroll !== navScroll) {
      el = [];
      index = 0;
      navScroll = this.navScroll;
    }

    el[index] = $elParam;
    index += 1;
  }

  (function init() {

    function bindScrollEvent() {
      $($window).bind("scroll", function () {
        clearTimeout(timer);
        timer = setTimeout(onScrollEvent, 150);  
      });
    }

    bindScrollEvent();

  })();

  function onScrollEvent() {
    var 
      length = el.length,
      scrollPosition = 0,
      documentHeight = 0,
      windowHeight = 0,
      calculatedHeight = 0,
      height = 0,
      index = 0,
      SCROLL_OFFSET = 110;

    /* Set calculation values */
    scrollPosition = $(window).scrollTop();
    documentHeight = $(document).height();
    windowHeight = $(window).height();
    calculatedHeight = scrollPosition + windowHeight + 1;

    /* Update to last slide if scrolled to bottom of document,
        else update current position to determine active slide */ 
    if (calculatedHeight >= documentHeight) {
      updateNavSlideActive(length-1);
    } else {
      updateCurrentPosition();
    }

    function updateCurrentPosition() {
      for (index = 0; index < length; index++) {
        height += 110;

        if (height - scrollPosition >= 0) {
          updateNavSlideActive(index);
          break;
        }

        height += el[index].height() - 110;
      }
    }

    function updateNavSlideActive(index) {
      var
        slide = el[index].attr("data-slide");
        navSlideEl = "[data-navSlide=" + slide + "]",
        navSlideActiveAttr = "nav-slide-active",
        navSlideActiveClass = "." + navSlideActiveAttr;

      if (!$(navSlideEl).hasClass(navSlideActiveAttr)) {
        $(navSlideActiveClass).removeClass(navSlideActiveAttr);
        $(navSlideEl).addClass(navSlideActiveAttr);
      }
    }
  }

  return UserScrollEvent;
});