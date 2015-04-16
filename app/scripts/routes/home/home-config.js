angular.module('root.routes.home')
	.config(function ($stateProvider, $httpProvider) {
    'use strict';

	  $stateProvider
			.state('about', {
				parent: 'app',
				url: '/',
        views: {
          '': {
            templateUrl: '/scripts/routes/home/index.html',
            controller: 'HomeController'
          }
        },
				resolve: {
					slides: function (QueryUtil) {
						return QueryUtil.resource('/data-store/home-slides.json').query();
					}
				}
			});

	});
