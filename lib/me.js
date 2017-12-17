const request = require('./request');

const getMe = function(options) {
  options.method = 'GET';
  return request('https://v1.api.mlab.com/me', options)
};

module.exports = {
  getMe,
};