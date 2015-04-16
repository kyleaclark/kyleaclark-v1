angular.module('root.routes.portfolio')
  .controller('PortfolioController', function ($scope, $timeout, slides) {
    'use strict';

    var self = this;

    /**
     * Initialize
     */
    this.init = function () {
      self.initVars();
      self.initBinds();
    };

    this.initVars = function () {
      $scope.slides = slides;
    };

    this.initBinds = function () {
      $scope.$on('ngRepeatFinished', function () {

        $timeout(function () {
          $scope.ngRepeatFinished = true;
        }, 0);

      });
    };

    // Initialize
    this.init();

  });
