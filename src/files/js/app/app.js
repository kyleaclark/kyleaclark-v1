angular.module("Napp", [
    "ngRoute",
    "ngResource",
    "Napp.components"
  ])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      // Home
      .when("/", {
        controller: "HomeController",
        templateUrl: "/js/app/views/home.html"
      })
      // Projects
      .when("/projects", {
        controller: "ProjectsController",
        templateUrl: "/js/app/views/projects.html"
      })
      // Gists
      .when("/gists", {
        controller: "GistsController",
        templateUrl: "/js/app/views/gists.html"
      })
      .otherwise({ redirectTo: "/" });

    // Set HTML5 Routing
    $locationProvider.html5Mode(true);
  });