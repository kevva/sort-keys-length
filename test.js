import test from 'ava';
import m from '.';

const fixture = {
	foobar: 'foo',
	foo: 'bar',
	foobarmoo: 'moo',
	unicorn: {
		a: 'foo',
		abc: 'foobar',
		ab: 'bar'
	}
};

test('sort keys ascending', t => {
	t.deepEqual(Object.keys(m.asc(fixture)), ['foo', 'foobar', 'unicorn', 'foobarmoo']);
});

test('sort keys ascending recursively', t => {
	t.deepEqual(Object.keys(m.asc(fixture, {deep: true}).unicorn), ['a', 'ab', 'abc']);
});

test('sort keys descending', t => {
	t.deepEqual(Object.keys(m.desc(fixture)), ['foobarmoo', 'unicorn', 'foobar', 'foo']);
});

test('sort keys descending recursively', t => {
	t.deepEqual(Object.keys(m.desc(fixture, {deep: true}).unicorn), ['abc', 'ab', 'a']);
});
