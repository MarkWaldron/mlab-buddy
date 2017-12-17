const request = require('./request');

const getAccount = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}`, options);
};

const getCharges = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/charges`, options)
};

const getInvoices = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/invoices`, options)
};

const getInvoice = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/invoices/${options.invoiceId}`, options)
};

const getMaintenanceEvents = function(options) {
  options.method = 'GET';
  return request(`https://v1.api.mlab.com/accounts/${options.accountId}/maintenance-events`, options)
};

module.exports = {
  getAccount,
  getCharges,
  getInvoices,
  getInvoice,
  getMaintenanceEvents,
};