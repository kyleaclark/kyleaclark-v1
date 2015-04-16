angular.module('root.common.utils')
  .service('QueryUtil', function ($resource) {
    'use strict';

    this.resource = function (urlPath) {
      return $resource(urlPath, {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    };

  });
