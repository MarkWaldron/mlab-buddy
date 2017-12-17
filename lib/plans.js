const request = require('./request');

const getPlans = function(options) {
  options.method = 'GET';
  return request('https://v1.api.mlab.com/plans', options)
};

const getPlan = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/plan/${options.planId}`, options)
}

module.exports = {
  getPlan,
  getPlans,
};