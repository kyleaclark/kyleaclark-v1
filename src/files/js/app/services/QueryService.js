angular.module("PortfolioApp").service('QueryService', function ($resource) {

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