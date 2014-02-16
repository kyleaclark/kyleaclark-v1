app.controller('ProjectsController', function ($scope, ProjectsService) {

  function init() {
    $scope.projects = ProjectsService.getProjects();
  }

  init();

});