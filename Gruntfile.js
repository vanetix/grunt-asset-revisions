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
      basic: {
        src: ['test/images/*'],
        dest: 'tmp/basic'
      },
      flatten: {
        flatten: true,
        src: ['test/images/*'],
        dest: 'tmp/flatten'
      }
    }
  });

  // Load this task
  grunt.loadTasks('tasks');

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Task cleans `tmp` and builds revisions, then runs tests
  grunt.registerTask('test', ['clean', 'revisions', 'nodeunit']);

  // Default task
  grunt.registerTask('default', ['jshint', 'test']);
};