app.controller('ProjectsController', function ($scope, ProjectsService) {

  function init() {
    $scope.projects = ProjectsService.getProjects();
    //$filter('date')(date[, "MM/YY"])
    //$scope.format = "MM/YY";
  }

  /*
  $scope.insertProject = function () {
    var firstName = $scope.newCustomer.firstName;
    var lastName = $scope.newCustomer.lastName;
    var city = $scope.newCustomer.city;
    customersService.insertCustomer(firstName, lastName, city);
    $scope.newCustomer.firstName = '';
    $scope.newCustomer.lastName = '';
    $scope.newCustomer.city = '';
  };
  */

  init();

});

