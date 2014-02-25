module.exports = function(config) {

  config.set({

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    /* defined within Gruntfile.js */

    // Preprocessors
    preprocessors: {
      'src/files/js/app/**/*.js': 'coverage'
    },

    // Reporters
    reporters: ['progress', 'coverage'],

    // Coverage reporter
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'test/.tmp-coverage'
      }, {
        type: 'text-summary'
      }]
    },

    port: 9779,

    colors: true,

    logLevel: config.LOG_INFO,

    captureTimeout: 20000,

    singleRun: false,

    reportSlowerThan: 500,

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ]

  });
};