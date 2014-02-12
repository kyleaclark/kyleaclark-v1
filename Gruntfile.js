module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    node_version: {
      options: {
        alwaysInstall: true
      }
    },

    clean: {
      out: ['/out'],
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
      files: ["Gruntfile.js", "src/**/*.js"],
      options: {
        ignores: ["src/files/lib/**/*.js"],
        jshintrc: ".jshintrc"
      }
    },

    exec: {
      serve: {
        cmd: "./node_modules/.bin/docpad run"
      },

      runServer: {
        cmd: "node server"
      },

      buildSite: {
        cmd: "./node_modules/.bin/docpad generate --env=production"
      },

      production: {
        cmd: "./node_modules/.bin/docpad run --env=production"
      }
    }

  });

  grunt.loadNpmTasks("grunt-node-version");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-dependency-installer");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask("prepare", ["clean:bower", "bower:install", "dependency_installer"]);
  grunt.registerTask("build", ["node_version", "prepare", "exec:buildSite"]);
  grunt.registerTask("serve", ["node_version", "exec:serve"]);
  grunt.registerTask("production", ["node_version", "jshint", "exec:production"]);
  grunt.registerTask("run-server", ["exec:runServer"]);
};
