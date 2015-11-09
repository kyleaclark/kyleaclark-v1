angular.module('root.routes.content')
	.config(function ($stateProvider, $httpProvider) {
    'use strict';

	  $stateProvider
			.state('content', {
				parent: 'app',
				url: '/content',
        views: {
          '': {
            templateUrl: '/scripts/routes/content/index.html',
            controller: 'ContentController'
          }
        },
				resolve: {
					slides: function (QueryUtil) {
						return QueryUtil.resource('/data-store/content-slides.json').query();
					}
				}
			});

	});
