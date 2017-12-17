const request = require('./request');

let baseUrl = 'https://v1.api.mlab.com/accounts/';

const getDeployments = function(options) {
  return request(baseUrl + `${options.accountId}/deployments`, options)
}

const createDeployment = function(options) {
  options.method = 'POST';
  return request(baseUrl + `${options.accountId}/deployments`, options)
};

const getDeployment = function(options) {
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}`, options)
};

const deleteDeployment = function(options) {
  options.method = 'DELETE';
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}`, options)
};

const getStatus = function(options) {
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}/status`, options)
};

const getFirewall = function(options) {
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
}

const updateFirewall = function(options) {
  options.method = 'PUT';
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
};

const deleteFirewall = function(options) {
  options.method = 'DELETE';
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
};

const getNetworkAccessMode = function(options) {
  options.method = 'DELETE';
  return request(baseUrl + `${options.accountId}/deployments/${options.deploymentId}/network-access-mode`, options)
};

const updateNetworkAccessMode = function(options) {
  options.method = 'PUT';
  return request(baseUrl + `${options.accountId}/deployments/${deploymentId}/network-access-mode`, options)
};


module.exports = {
  getDeployments,
  createDeployment,
  getDeployment,
  deleteDeployment,
  getStatus,
  getFirewall,
  updateFirewall,
  deleteFirewall,
  getNetworkAccessMode,
  updateNetworkAccessMode,
};