const request = require('./request');

let baseUrl = 'https://v1.api.mlab.com/accounts/';

const getEnvironments = function(options) {
  return request(baseUrl + `${options.accountId}/environments`, options)
};

const getEnvironment = function(options) {
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}`, options)
};

const createEnvironment = function(options) {
  options.method = 'POST';
  return request(baseUrl + `${options.accountId}/environments`, options)
};

const deleteEnvironment = function(options) {
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}`, options)
};

const getPeerings = function(options) {
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}/peerings`, options)
};

const getPeering = function(options) {
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}/peerings/${options.peeringId}`, options)
};

const createPeering = function(options) {
  options.method = 'POST';
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}/peerings`, options)
};

const deletePeering = function(options) {
  options.method = 'DELETE';
  return request(baseUrl + `${options.accountId}/environments/${options.environmentId}/peerings/${options.peeringId}`, options);
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