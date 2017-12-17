const request = require('./request');

let baseUrl = `https://v1.api.mlab.com/accounts/`;

const getAccount = function(options) {
  return request(baseUrl + options.accountId, options);
};

const getCharges = function(options) {
  return request(baseUrl + `${options.accountId}/charges`, options)
};

const getInvoices = function(options) {
  return request(baseUrl + `${options.accountId}/invoices`, options)
};

const getInvoice = function(options) {
  return request(baseUrl + `${options.accountId}/invoices/${options.invoiceId}`, options)
};

const getMaintenanceEvents = function(options) {
  return request(baseUrl + `${options.accountId}/maintenance-events`, options)
};

module.exports = {
  getAccount,
  getCharges,
  getInvoices,
  getInvoice,
  getMaintenanceEvents,
};