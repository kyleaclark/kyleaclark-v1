angular.module('root.routes')
  .config(function ($urlRouterProvider, $stateProvider) {
    'use strict';

    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();

      if ('/' === path[path.length - 1]) {
        return path.replace(/\/$/, '');
      }

      if (path.indexOf('/?') > 0) {
        return path.replace('/?', '?');
      }

      return;
    });

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          '': {
            templateUrl: '/views/layout.html',
          }
        },
        data: {
          pageClass: 'page',
          pageTitle: 'Kyle A. Clark'
        }
      });

    $stateProvider
      .state('404', {
        templateUrl: '/views/404.html',
        data: {
          pageTitle: 'Page not found'
        }
      });

    $urlRouterProvider.otherwise(function ($injector, $location) {
       var state = $injector.get('$state');

       state.go('404');

       return $location.path();
    });


  }).run(function ($rootScope) {
    'use strict';

    // $rootScope.$on('$stateChangeStart', function () {});

    // $rootScope.$on('$stateChangeSuccess', function () {});

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      console.error(event);
      console.error(toState);
      console.error(toParams);
      console.error(error);
      console.error(error.stack);

    });

  });
