# mLab Buddy
> mLab Buddy is a node module used for integrating with mLabs new API (Still in BETA and subject to change)

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

mLab is currently building a [new API][api] for creating and managing your mLab account and creating new deployments. This is very different from their existing Data API which allows you to interact with the actual MongoDB's.

<!-- ![](header.png) -->

## Installation

OS X & Linux:

```sh
npm install mlab-buddy --save
```

## Usage example
All methods return a promise with the result of the call.
If you're unfamiliar with promises, you call .then to get the result, and .catch to handle errors.

> Me

getMe
```JavaScript
const mLabBuddy = require('mlab-buddy');

let options = {
  accessKey: 'INSERT_ACCESS_KEY_HERE',
  accessKeySecret: 'INSERT_ACCESS_KEY_SECRET_HERE',
  timeout: 10000
};

mLabBuddy.me.getMe(options)
```

> Accounts

```JavaScript
const mLabBuddy = require('mlab-buddy');

let options = {
  accessKey: 'INSERT_ACCESS_KEY_HERE',
  accessKeySecret: 'INSERT_ACCESS_KEY_SECRET_HERE',
  accountId: 'INSERT_ACCOUNTID_HERE',
  timeout: 10000,
};

mLabBuddy.accounts.getAccount(options)
mLabBuddy.accounts.getCharges(options)
mLabBuddy.accounts.getInvoices(options)
mLabBuddy.accounts.getInvoice(options) //requires options.invoiceId to be set with a valid invoice id
mLabBuddy.accounts.getMaintenanceEvents(options)

```

_For more examples and usage, please refer to the [Wiki][wiki]._

## Meta

Mark Waldron – [@MarkWaldron](https://twitter.com/MarkWaldron)

Distributed under the MIT license. See ``MIT`` for more information.

[https://github.com/MarkWaldron/mlab-buddy](https://github.com/MarkWaldron/)

## Contributing

1. Fork it (<https://github.com/MarkWaldron/mlab-buddy/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/mlab-buddy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mlab-buddy
[npm-downloads]: https://img.shields.io/npm/dm/mlab-buddy.svg?style=flat-square
[wiki]: https://github.com/MarkWaldron/mlab-buddy/wiki
[api]: https://v1.api.mlab.com/docs/