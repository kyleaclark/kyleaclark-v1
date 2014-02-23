angular.module("PortfolioApp", ["ngRoute"]);

//This configures the routes and associates each route with a view and a controller
angular.module("PortfolioApp").config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      controller: "HomeController",
      templateUrl: "/js/app/views/home.html"
    })
    //Define a route that has a route parameter in it (:customerID)
    .when("/projects", {
      controller: "ProjectsController",
      templateUrl: "/js/app/views/projects.html"
    })
    .otherwise({ redirectTo: "/" });

  // Set HTML5 Routing
  $locationProvider.html5Mode(true);
});