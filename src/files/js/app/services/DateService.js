angular.module("Napp").service("DateService", function () {

  this.toJsDate = function (str) {
    if (!str) {
      return null;
    }

    console.log(str);

    return new Date(str);
  };

});