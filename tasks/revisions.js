/*
 * grunt-asset-revisions
 * https://github.com/vanetix/grunt-asset-revisions
 *
 * Copyright (c) 2013 Matt McFarland
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  /**
   * Dependencies
   */

  var path = require('path'),
      crypto = require('crypto');

  /**
   * Core `grunt-asset-revisions` task
   */

  grunt.registerMultiTask('revisions', 'Automate the hash renames of assets filename', function() {

    /**
     * Default options
     */

    var options = this.options({});

    this.files.forEach(function(f) {
      f.src.forEach(function(file) {
        var r = revision(file);

        if(f.flatten) {
          r = path.basename(r);
        }

        grunt.file.copy(file, path.join(f.dest, r));
        grunt.log.write(file + ' ').oklns(r);
      });
    });
  });

  /**
   * Returns the new filename for `file` with the
   * generated hash in the filename.
   *
   * @param {String} file
   * @return {String}
   */

  function revision(file) {
    var h = hash(file).slice(0, 6),
        ext = path.extname(file).slice(1),
        base = file.replace(/\.[A-Za-z0-9]*$/, '');

    return [base, h, ext].join('.');
  }

  /**
   * Generate md5 hash for `file`
   *
   * @param {String} file
   * @return {String}
   */

  function hash(file) {
    var h = crypto.createHash('md5');
    h.update(grunt.file.read(file), 'utf8');
    grunt.verbose.write('Hashing ' + file + '...');
    return h.digest('hex');
  }

};