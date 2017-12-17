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
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}`, options)
};

const deleteDeployment = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}`, options)
};


module.exports = {
  getDeployments,
  createDeployment,
  getDeployment,
  deleteDeployment,
};