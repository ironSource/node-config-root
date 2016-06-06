'use strict';

var osenv = require('osenv')
  , uuid = require('uuid')
  , xdgBasedir = require('xdg-basedir')
  , osTmpdir = require('os-tmpdir')
  , path = require('path')

if (xdgBasedir.config) {
  module.exports = xdgBasedir.config
} else {
  var user = (osenv.user() || uuid.v4()).replace(/\\/g, '')
  module.exports = path.join(osTmpdir(), user, '.config')
}
