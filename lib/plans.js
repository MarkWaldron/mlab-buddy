const request = require('./request');

let baseUrl = 'https://v1.api.mlab.com/plans/';
const getPlans = function(options) {
  return request(baseUrl, options)
};

const getPlan = function(options) {
  return request(baseUrl + `${options.planId}`, options)
}

module.exports = {
  getPlan,
  getPlans,
};