var request = require('superagent');
var config = require('./config.js');
var superagentMock = require('superagent-mock')(request, config);

superagentMock.unset();