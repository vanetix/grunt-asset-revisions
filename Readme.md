# grunt-asset-revisions [![Build Status](https://travis-ci.org/vanetix/grunt-asset-revisions.png?branch=master)](https://travis-ci.org/vanetix/grunt-asset-revisions)

> A grunt plugin for versioning assets.

## Getting Started
***This task only works with grunt >= 0.4.0***

Install this grunt plugin next to your project's `Gruntfile.js` with:

```shell
npm install grunt-asset-revisions
```

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-asset-revisions');
```

## Usage
**Basic**

```javascript
revisions: {
  basic: {
    src: ['path/to/assets/**'],
    dest: 'path/to/dest'
  }
}
```

**Flatten**

```javascript
revisions: {
  flatten: {
    flatten: true,
    src: ['path/to/assets/**'],
    dest: 'path/to/dest'
  }
}
```

**Manifest**

```javascript
revisions: {
  manifest: {
    options: {
        manifest: true
    },
    src: ['path/to/assets/**'],
    dest: 'path/to/dest'
  }
}
```

**Rename**
> original filenames will be renamed

```javascript
revisions: {
  rename: {
    src: ['path/to/assets/**']
  }
}
```

## License (MIT)
Copyright (c) 2013 Matt McFarland

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
