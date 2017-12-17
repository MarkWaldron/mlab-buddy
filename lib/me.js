const request = require('./request');

const getMe = function(options) {
  return request('https://v1.api.mlab.com/me', options)
};

module.exports = {
  getMe,
};