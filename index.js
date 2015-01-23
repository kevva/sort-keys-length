'use strict';

var lengthSort = require('length-sort');
var sortKeys = require('sort-keys');

/**
 * Sort object keys by length
 *
 * @param obj
 * @api public
 */

module.exports.desc = function (obj) {
	return sortKeys(obj, lengthSort.desc);
};

module.exports.asc = function (obj) {
	return sortKeys(obj, lengthSort.asc);
};
