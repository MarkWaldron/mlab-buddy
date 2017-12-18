const request = require('./request');
let baseUrl = `https://v1.api.mlab.com/clouds/`;

const getClouds = function(options) {
  return request(baseUrl, options)
}

const getCloud = function(options) {
  return request(baseUrl + options.cloudId, options)
};


module.exports = {
  getCloud,
  getClouds,
};