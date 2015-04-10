# sort-keys-length [![Build Status](http://img.shields.io/travis/kevva/sort-keys-length/master.svg?style=flat)](http://travis-ci.org/kevva/sort-keys-length)

> Sort object keys by length


## Install

```
$ npm install --save sort-keys-length
```


## Usage

```js
var sortKeysLength = require('sort-keys-length');

sortKeysLength.asc({ab: 'x', a: 'y', abc: 'z'});
//=> {a: 'y', ab: 'x', abc: 'z'}

sortKeysLength.desc({ab: 'x', a: 'y', abc: 'z'});
//=> {abc: 'z', ab: 'x', a: 'y'}
```


## API

### .asc(obj)

Ascending sort.

### .desc(obj)

Descending sort.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
