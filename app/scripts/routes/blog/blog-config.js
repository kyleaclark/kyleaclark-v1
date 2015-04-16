angular.module('root.routes.blog')
	.config(function ($stateProvider, $httpProvider) {
    'use strict';

	  $stateProvider
			.state('blog', {
				parent: 'app',
				url: '/blog',
        views: {
          '': {
            templateUrl: '/scripts/routes/blog/index.html',
            controller: 'BlogController'
          }
        },
				resolve: {
					slides: function (QueryUtil) {
						return QueryUtil.resource('/data-store/blog-slides.json').query();
					}
				}
			});

	});
