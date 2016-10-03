'use strict';
const lengthSort = require('length-sort');
const sortKeys = require('sort-keys');

module.exports.desc = obj => sortKeys(obj, lengthSort.desc);
module.exports.asc = obj => sortKeys(obj, lengthSort.asc);
