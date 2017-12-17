const request = require('./request');

const getDeployments = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments`, options)
}

const createDeployment = function(options) {
  options.method = 'POST';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments`, options)
};

const getDeployment = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}`, options)
};

const deleteDeployment = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}`, options)
};

const getStatus = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}/status`, options)
};

const getFirewall = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
}

const updateFirewall = function(options) {
  options.method = 'PUT';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
};

const deleteFirewall = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}/firewall`, options)
};

const getNetworkAccessMode = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${options.deploymentId}/network-access-mode`, options)
};

const updateNetworkAccessMode = function(options) {
  options.method = 'PUT';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}/network-access-mode`, options)
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