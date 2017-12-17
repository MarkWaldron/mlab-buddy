const request = require('./request');

const getEnvironments = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments`, options)
};

const getEnvironment = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}`, options)
};

const createEnvironment = function(options) {
  options.method = 'POST';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments`, options)
};

const deleteEnvironment = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}`, options)
};

const getPeerings = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}/peerings`, options)
};

const getPeering = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}/peerings/${options.peeringId}`, options)
};

const createPeering = function(options) {
  options.method = 'POST';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}/peerings`, 
};

const deletePeering = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/environments/${options.environmentId}/peerings/${options.peeringId}`, 
};

module.exports = {
  getEnvironments,
  getEnvironment,
  createEnvironment,
  deleteEnvironment,
  getPeerings,
  getPeering,
  createPeering,
  deletePeering,
};