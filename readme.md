# config-root

**Exports the path to the user's config directory. Cross-platform; extracted from Yeoman's [configstore](https://www.npmjs.com/package/configstore).**

[![npm status](http://img.shields.io/npm/v/config-root.svg?style=flat-square)](https://www.npmjs.org/package/config-root) [![node](https://img.shields.io/node/v/config-root.svg?style=flat-square)](https://www.npmjs.org/package/config-root)

## example

```js
const root = require('config-root')

// Most likely ~/.config or C:\Users\username\.config
console.log(root)
```

## install

With [npm](https://npmjs.org) do:

```
npm install config-root
```

## license

[BSD-2-Clause](https://spdx.org/licenses/BSD-2-Clause.html) © [ironSource](http://www.ironsrc.com/). [Original work](https://www.npmjs.com/package/configstore) © Google.
