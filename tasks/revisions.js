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

  var fs = require('fs'),
      path = require('path'),
      crypto = require('crypto');

  /**
   * Core `grunt-asset-revisions` task
   */

  grunt.registerMultiTask('revisions', 'Automate the hash renames of assets filename', function() {

    /**
     * Default options
     */

    var options = this.options({
      manifest: false
    });

    /**
     * Loop over all file arguments saving revisions in
     * directory `f.dest`
     */

    this.files.forEach(function(f) {
      var assets = [];

      /**
       * Is the destination a file, if so we cannnot save to it.
       */

      if(grunt.file.isFile(f.dest)) {
        var error = 'Skipping: ' + f.dest +
                    '. Cannot have a dest file, must be a folder.';
        grunt.fail.warn(error);
        return;
      }

      /**
       * Filter out non-existing files
       */

      f.src.filter(function(f) {
        if(!grunt.file.isFile(f)) {
          grunt.log.error('File: ' + f + ' not found.');
          return false;
        }

        return true;
      }).forEach(function(file) {
        var r = revision(file);
        var map = {};

        if(f.dest) {
          if(f.flatten) {
            r = path.basename(r);
          }

          r = path.join(f.dest, r);
          grunt.file.copy(file, r);
          grunt.log.write(file + ' ').oklns(r);
        } else {
          fs.renameSync(file, r);
          grunt.log.write(file + ' renamed to ').oklns(r);
        }

        map[file] = r;
        assets.push(map);
      });

      if(options.manifest) {
        grunt.file.write(path.join(f.dest, 'manifest.json'), JSON.stringify(assets, null, ' '));
      }
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