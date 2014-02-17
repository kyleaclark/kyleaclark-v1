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

      $currentNavActiveEl = $('.nav-slider-active');

      if (!$el.hasClass('nav-slider-active')) {

        if (elAttrVal) {
          targetEl = '[' + targetElAttr + '=' + elAttrVal + ']';
          $targetEl = $(targetEl);
        } else {
          $targetEl = $el;
        }
      
        navTargetEl = '[' + elAttr + '=' + elAttrVal + ']';
        $navTargetEl = $(navTargetEl);

        $currentNavActiveEl.removeClass('nav-slider-active');
        $navTargetEl.addClass('nav-slider-active');

        $("body").animate({scrollTop: ($targetEl.offset().top - targetElPadding)}, targetAnimateDuration);
      }
    });
  }

  return {
    restrict: 'A',
    link: link
  }
});