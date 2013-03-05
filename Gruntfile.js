module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/revisions.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    nodeunit: {
      tests: ['test/index.js']
    },

    // Remove test staging directory
    clean: {
      tests: ['tmp']
    },

    // Build the test cases
    revisions: {
      tests: {
        src: ['test/images/*'],
        dest: 'tmp'
      }
    }
  });

  // Load this task
  grunt.loadTasks('tasks');

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Task task cleans `tmp` and builds includes, then runs tests
  grunt.registerTask('test', ['clean', 'revisions', 'nodeunit']);

  // Default task
  grunt.registerTask('default', ['jshint', 'test']);
};