var grunt = require('grunt');

exports.revisions = {
  basic: function(test) {
    test.expect(1);

    var expected = [
      'test/images/cat1.3a5521.jpg',
      'test/images/cat2.5cedc3.jpg',
      'test/images/cat3.b998a9.jpg',
    ];

    var actual = grunt.file.expand({cwd: 'tmp/basic'}, '**/*.jpg').sort();
    test.deepEqual(actual, expected, 'should do basic asset revisions');

    test.done();
  },

  flatten: function(test) {
    test.expect(1);

    var expected = [
      'cat1.3a5521.jpg',
      'cat2.5cedc3.jpg',
      'cat3.b998a9.jpg',
    ];

    var actual = grunt.file.expand({cwd: 'tmp/flatten'}, '*.jpg').sort();
    test.deepEqual(actual, expected, 'should do flatten asset revisions');

    test.done();
  },

  manifest: function(test) {
    test.expect(1);

    var actual = JSON.parse(grunt.file.read('tmp/basic/manifest.json'));
    var expected = JSON.parse(grunt.file.read('test/expected/manifest.json'));
    test.deepEqual(actual, expected, 'should write a valid manifest file');

    test.done();
  }
};
