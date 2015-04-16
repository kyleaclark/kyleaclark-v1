angular.module('root.common.widgets.filters')
  .filter('toJsDate', function () {
    'use strict';

    return function (input) {
      if (!input) {
        return '';
      }

      return new Date(input);
    };
  });
