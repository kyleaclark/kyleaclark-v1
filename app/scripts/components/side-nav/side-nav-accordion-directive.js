angular.module('root.components.side-nav', [])

  .directive('navAccordion', function () {

    return {

      restrict: 'A',

      link: function (scope, element) {
        var $navBtnEl = angular.element('#nav-btn'),
            timer = 0,
            timerDelay = 1000;

        element.on('click', onClickEvent);

        function onClickEvent() {
          clearTimeout(timer);

          timer = setTimeout(function () {
            $navBtnEl.prop('checked', false);
          }, timerDelay);
        }

      }

    };

  });
