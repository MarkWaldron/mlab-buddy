const request = require('./request');

const getCharges = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/charges`, options)
}

module.exports = {
  getCharges,
};