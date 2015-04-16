angular.module('root.system', [])
  .config(function ($locationProvider) {
    'use strict';
    
    $locationProvider.html5Mode(true);
  });
