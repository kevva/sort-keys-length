# sort-keys-length [![Build Status](https://travis-ci.org/kevva/sort-keys-length.svg?branch=master)](http://travis-ci.org/kevva/sort-keys-length)

> Sort object keys by length


## Install

```
$ npm install --save sort-keys-length
```


## Usage

```js
const sortKeysLength = require('sort-keys-length');

sortKeysLength.asc({ab: 'x', a: 'y', abc: 'z'});
//=> {a: 'y', ab: 'x', abc: 'z'}

sortKeysLength.desc({ab: 'x', a: 'y', abc: 'z'});
//=> {abc: 'z', ab: 'x', a: 'y'}
```


## API

### sortKeysLength.asc(obj)

Ascending sort.

### sortKeysLength.desc(obj)

Descending sort.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
