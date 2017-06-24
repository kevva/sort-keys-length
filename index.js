'use strict';
const lengthSort = require('length-sort');
const sortKeys = require('sort-keys');

module.exports.desc = (obj, opts) => {
	opts = opts || {};
	return sortKeys(obj, {compare: lengthSort.desc, deep: opts.deep});
};

module.exports.asc = (obj, opts) => {
	opts = opts || {};
	return sortKeys(obj, {compare: lengthSort.asc, deep: opts.deep});
};
