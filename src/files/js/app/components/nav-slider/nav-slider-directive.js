angular.module("Napp.navSlider.directive", [])

  .directive("navSlider", function () {
    return {
      restrict: "A",
      link: function (scope, element, attr) {
        var
          elAttr = 'data-navSlide',
          targetElAttr = 'data-slide',
          targetElPadding = 40,
          targetAnimateDuration = 1000;
          
        element.bind("click", function () {
          var 
            elAttrVal = element.attr(elAttr),
            targetEl,
            navTargetEl,
            $targetEl,
            $navTargetEl,
            $currentNavActiveEl;

          $currentNavActiveEl = angular.element('.nav-slide-active');

          if (!element.hasClass('nav-slide-active')) {

            if (elAttrVal) {
              targetEl = '[' + targetElAttr + '=' + elAttrVal + ']';
              $targetEl = angular.element(targetEl);
            } else {
              $targetEl = angular.element(el);
            }

            angular.element("html, body").animate({scrollTop: ($targetEl.offset().top - targetElPadding)}, targetAnimateDuration);
          }
        });
      }
    }
  });