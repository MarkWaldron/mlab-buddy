const request = require('./request');

const getFirewall = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}/firewall`, options)
}

const updateFirewall = function(options) {
  options.method = 'PUT',
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}/firewall`, options)
};

const deleteFirewall = function(options) {
  options.method = 'DELETE';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/deployments/${deploymentId}/${deploymentId}/firewall`, options)
};


module.exports = {
  getFirewall,
  updateFirewall,
  deleteFirewall,
};