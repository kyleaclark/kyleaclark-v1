app.service("ScrollService", function () {

  this.getProjects = function () {
    return this.projects;
  };

  this.getProject = function (id) {
    var projectsLength = this.projects.length;

    for (var i = 0; i < projectsLength; i++) {
      if (this.projects[i].id === id) {
        return this.projects[i];
      }
    }
    return null;
  };

});