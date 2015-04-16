angular.module('root.routes.portfolio')
	.config(function ($stateProvider, $httpProvider) {
    'use strict';

	  $stateProvider
			.state('portfolio', {
				parent: 'app',
				url: '/portfolio',
        views: {
          '': {
            templateUrl: '/scripts/routes/portfolio/index.html',
            controller: 'PortfolioController'
          }
        },
				resolve: {
					slides: function (QueryUtil) {
						return QueryUtil.resource('/data-store/portfolio-slides.json').query();
					}
				}
			});

	});
