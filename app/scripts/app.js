'use strict';

/**
 * @ngdoc overview
 * @name root
 * @description
 * # root
 *
 * Main module of the application.
 */
angular.module('root', [
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngTouch',

  'ui.router',

  'root.system',
  'root.common',
  'root.components',
  'root.routes'
]);
