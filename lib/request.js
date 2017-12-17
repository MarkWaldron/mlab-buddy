let fetch = require('node-fetch');


module.exports = function(url, options) {
  let reqOptions = {
    method: options.method,
    headers: {
      'access-key-id': options.accessKey,
      'access-key-secret': options.accessKeySecret,
      'Content-Type': 'application/json',
    },
    timeout: options.timeout || 5000,    
  };

  return fetch(url, reqOptions)
  .then(res => {
    return res.json();
  });
}
