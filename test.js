'use strict';

var sortKeysLength = require('./');
var test = require('ava');

test('sort keys ascending', function (t) {
	var obj = { foobar: 'foo', foo: 'bar', foobarmoo: 'moo' };
	var expected = { foo: 'bar', foobar: 'foo', foobarmoo: 'moo' };
	t.assert(sortKeysLength.asc(obj), expected);
	t.end();
});

test('sort keys descending', function (t) {
	var obj = { foobar: 'foo', foo: 'bar', foobarmoo: 'moo' };
	var expected = { foobarmoo: 'moo', foobar: 'foo', foo: 'bar' };
	t.assert(sortKeysLength.desc(obj), expected);
	t.end();
});
