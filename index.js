'use strict';
var lengthSort = require('length-sort');
var sortKeys = require('sort-keys');

module.exports.desc = function (obj) {
	return sortKeys(obj, lengthSort.desc);
};

module.exports.asc = function (obj) {
	return sortKeys(obj, lengthSort.asc);
};
