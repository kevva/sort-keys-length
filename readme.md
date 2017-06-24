# sort-keys-length [![Build Status](https://travis-ci.org/kevva/sort-keys-length.svg?branch=master)](http://travis-ci.org/kevva/sort-keys-length)

> Sort object keys by length


## Install

```
$ npm install sort-keys-length
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

### sortKeysLength.asc(object, [options])

Ascending sort.

### sortKeysLength.desc(object, [options])

Descending sort.

#### object

Type: `Object`

Object to sort.

#### options

Type: `Object`

##### deep

Type: `boolean`<br>
Default: `false`

Recursively sort keys.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
