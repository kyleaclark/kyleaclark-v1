angular.module('root.common.widgets.directives')
  .directive('onLastRepeat', function ($timeout) {
    'use strict';

    return {
      restrict: 'A',

      link: function (scope, element, attr) {

        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('ngRepeatFinished');
          }, 0);
        }
      }
    };

  }
);
