const request = require('./request');

const getAccount = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}`, options);
}

module.exports = {
  getAccount,
};