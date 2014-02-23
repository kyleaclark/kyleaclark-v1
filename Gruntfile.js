module.exports = function (grunt) {

  var jsFiles = [
    'out/lib/**/jquery.js',
    'out/lib/**/angular.js',
    'out/lib/**/angular-route.js',
    'out/js/app/app.js',
    'out/js/**/*.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    node_version: {
      options: {
        alwaysInstall: true
      }
    },

    clean: {
      out: ['out'],
      bower: ['.tmp_bower']
    },

    bower: {
      install: {
        options: {
          targetDir: './src/files/lib/bower',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        ignores: ['src/files/lib/**/*.js'],
        jshintrc: '.jshintrc'
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: jsFiles,
        dest: 'out/js/app.js'
      }
    },

    ngmin: {
      dist: {
        src: ['out/js/app.js'],
        dest: 'out/js/app.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'out/js/app.js': ['out/js/app.js']
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'out/css/app.css': ['out/css/all.css']
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'out',
        src: ['**/*.html'],
        dest: 'out/'
      }
    },

    exec: {
      serve: {
        cmd: './node_modules/.bin/docpad run'
      },

      runServer: {
        cmd: 'node server'
      },

      buildSite: {
        cmd: './node_modules/.bin/docpad generate --env=production'
      },

      production: {
        cmd: './node_modules/.bin/docpad run --env=production'
      }
    }

  });

  grunt.loadNpmTasks('grunt-node-version');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-node-version');

  grunt.registerTask('minify', [
    'concat:dist',
    'ngmin:dist',
    'uglify:dist',
    'cssmin:dist',
    'htmlmin:dist'
  ]);

  grunt.registerTask('prepare', ['clean', 'bower:install']);
  grunt.registerTask('setup', ['node_version', 'prepare']);

  grunt.registerTask('build', ['node_version', 'prepare', 'exec:buildSite']);
  grunt.registerTask('dist', ['build', 'minify']);
  grunt.registerTask('production', ['dist', 'exec:production']);
  grunt.registerTask('serve', ['node_version', 'exec:serve']);
  grunt.registerTask('run-server', ['exec:runServer']);
};
