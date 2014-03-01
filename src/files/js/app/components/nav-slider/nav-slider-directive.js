angular.module("Napp.navSlider.directive", [])

  .directive("navSlider", function () {
    return {
      restrict: "A",
      link: function (scope, element, attr) {
        var $targetSlideEl;
          
        // Bind click event to element
        element.bind("click", onClickEvent);

        // On click event handler
        function onClickEvent() {
          var navSlideClassVal = "nav-slide-active";

          if (!element.hasClass(navSlideClassVal)) {
            updateTargetSlideEl();
            animateTargetSlideScroll();
          }
        }

        // Update target slide element
        function updateTargetSlideEl() {
          var
            elAttr = "data-navSlide",
            elAttrVal = element.attr(elAttr),
            targetSlideElAttr = "data-slide",
            targetSlideEl;

          if (elAttrVal) {
            targetSlideEl = "[" + targetSlideElAttr + "=" + elAttrVal + "]";
            $targetSlideEl = angular.element(targetSlideEl);
          }
        }

        // Animate scroll to target slide element
        function animateTargetSlideScroll() {
          var
            targetSlideElPadding = 40,
            targetAnimateDuration = 1000,
            $htmlBody = angular.element("html, body"),
            targetOffsetDifference = 0;

          // If targetSlideEl exists, animate scroll from the targetSlideEl offset.top minus targetSlideElpadding
          if ($targetSlideEl !== undefined && $targetSlideEl.length > 0) {
            targetOffsetDifference = $targetSlideEl.offset().top - targetSlideElPadding;
            $htmlBody.animate({scrollTop: targetOffsetDifference}, targetAnimateDuration);
          }
        }
      }
    }
  });