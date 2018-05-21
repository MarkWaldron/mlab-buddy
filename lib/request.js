const fetch = require('node-fetch');
const qs = require('querystring');

module.exports = function(url, options) {
  const reqOptions = Object.assign({}, options, {
    method: options.method || 'GET',
    headers: {
      'access-key-id': options.accessKey,
      'access-key-secret': options.accessKeySecret,
      'Content-Type': 'application/json',
    },
    timeout: options.timeout || 5000,    
  });
  const reqURL = (reqOptions.method === 'GET' && reqOptions.body)
    ?`${url}?${qs.stringify(options.body)}`
    :url;
  
  return fetch(reqURL, reqOptions)
  .then(res => {
    return res.json();
  });
}
