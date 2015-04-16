angular.module('root.components.user-scroll', [])

  .directive('userScroll', function () {

    return {

      restrict: 'A',

      controller: function () {
        this.elems = [];

        this.getElements = function () {
          return this.elems;
        };

        this.storeElement = function (el) {
          this.elems.push(el);
        };
      }

    };

  })

  .directive("userScrollUpdateNav", function ($document, $window) {

    return {

      restrict: "A",

      require: "^userScroll",

      link: function (scope, element, attr, UserScroll) {
        var
          elems = [],
          elemsLength = 0,
          documentHeight = 0,
          calculatedHeight = 0,
          scrollPosition = 0,
          windowEl = angular.element($window);

        // Store current element to parent controller
        UserScroll.storeElement(element);

        // On scroll event handler
        function onScrollEvent() {
          updateElems();
          updateScrollCalculations();
          processScrollCalculations();
        }

        // Update elems
        function updateElems() {
          elems = UserScroll.getElements();
          elemsLength = elems.length;
        }

        // Update scroll calculation values
        function updateScrollCalculations() {
          var windowHeight = 0;

          /* Update calculation values */
          scrollPosition = windowEl.scrollTop();
          documentHeight = $document.height();
          windowHeight = windowEl.height();
          calculatedHeight = scrollPosition + windowHeight + 1;
        }

        // Process logic for scroll calculations
        function processScrollCalculations() {
          /* Update to last slide if scrolled to bottom of document,
             else update current position to determine active slide */
          if (calculatedHeight >= documentHeight) {
            updateNav(elemsLength - 1);
          } else {
            processElemsHeights();
          }
        }

        // Process logic for elements height from scroll position
        function processElemsHeights() {
          var
            height = 0,
            index = 0,
            SCROLL_OFFSET = 110;

          for (; index < elemsLength; index++) {
            height += SCROLL_OFFSET;

            if (height - scrollPosition >= 0) {
              updateNav(index);
              break;
            }

            height += elems[index].height() - SCROLL_OFFSET;
          }
        }

        // Update nav slide active class
        function updateNav(index) {
          var
            slide = angular.element(elems[index]).attr('data-slide'),
            navSlideEl = '[data-navSlide=' + slide + ']',
            navSlideActiveAttr = 'nav-slide-active',
            navSlideActiveClass = '.' + navSlideActiveAttr,
            $navSlideEl = angular.element(navSlideEl),
            $navSlideActiveClass = angular.element(navSlideActiveClass);

          if (!$navSlideEl.hasClass(navSlideActiveAttr)) {
            $navSlideActiveClass.removeClass(navSlideActiveAttr);
            $navSlideEl.addClass(navSlideActiveAttr);
          }
        }

        // Set scroll event on last scope iteration
        if (scope.$last) {
          windowEl.on('scroll', onScrollEvent);
        }
      }

    };

  });
