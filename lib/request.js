const fetch = require('node-fetch');
const qs = require('querystring');

module.exports = function(url, options) {
  let reqOptions = Object.assign({}, options, {
    method: options.method || 'GET',
    headers: {
      'access-key-id': options.accessKey,
      'access-key-secret': options.accessKeySecret,
      'Content-Type': 'application/json',
    },
    timeout: options.timeout || 5000,    
  });

  return fetch(`${url}${(options.method==='GET' && options.body)?'?'+qs.stringify(options.body):''}`, reqOptions)
  .then(res => {
    return res.json();
  });
}
