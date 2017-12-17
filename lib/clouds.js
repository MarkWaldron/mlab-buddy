const request = require('./request');

const getClouds = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/clouds`, options)
}

const getCloud = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/clouds/${options.cloudId}`, options)
};


module.exports = {
  getCloud,
  getClouds,
};