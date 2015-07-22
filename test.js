'use strict';
var test = require('ava');
var sortKeysLength = require('./');

test('sort keys ascending', function (t) {
	var obj = {foobar: 'foo', foo: 'bar', foobarmoo: 'moo'};
	var expected = {foo: 'bar', foobar: 'foo', foobarmoo: 'moo'};
	t.assert(sortKeysLength.asc(obj), expected, sortKeysLength.asc(obj));
	t.end();
});

test('sort keys descending', function (t) {
	var obj = {foobar: 'foo', foo: 'bar', foobarmoo: 'moo'};
	var expected = {foobarmoo: 'moo', foobar: 'foo', foo: 'bar'};
	t.assert(sortKeysLength.desc(obj), expected, sortKeysLength.desc(obj));
	t.end();
});
