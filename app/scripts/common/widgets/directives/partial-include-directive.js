angular.module('root.common.widgets.directives')
  .directive('partialInclude', function ($http, $templateCache, $compile) {
    'use strict';

    // include partial view without adding child scope

    return function (scope, element, attrs) {
      var templatePath = attrs.partialInclude;

      $http
        .get(templatePath, { cache: $templateCache })
        .success(function(response) {
          var contents = element.html(response).contents();

          $compile(contents)(scope);
        });
    };

  });
