var $ = angular.element;

app.directive('scrollOnClick', function () {
  function link ($scope, $el, $location) {
    var
      elAttr = 'data-navSlide',
      targetElAttr = 'data-slide',
      targetElPadding = 40,
      targetAnimateDuration = 1000;
    
    $el.on('click', function () {
      var 
        elAttrVal = $el.attr(elAttr),
        targetEl,
        navTargetEl,
        $targetEl,
        $navTargetEl,
        $currentNavActiveEl;

      $currentNavActiveEl = $('.nav-slide-active');

      if (!$el.hasClass('nav-slide-active')) {

        if (elAttrVal) {
          targetEl = '[' + targetElAttr + '=' + elAttrVal + ']';
          $targetEl = $(targetEl);
        } else {
          $targetEl = $el;
        }

        $("html, body").animate({scrollTop: ($targetEl.offset().top - targetElPadding)}, targetAnimateDuration);
      }
    });
  }

  return {
    restrict: 'A',
    link: link
  }
});