import test from 'ava';
import m from './';

const fixture = {
	foobar: 'foo',
	foo: 'bar',
	foobarmoo: 'moo'
};

test('sort keys ascending', t => {
	t.deepEqual(m.asc(fixture), {
		foo: 'bar',
		foobar: 'foo',
		foobarmoo: 'moo'
	});
});

test('sort keys descending', t => {
	t.deepEqual(m.asc(fixture), {
		foobarmoo: 'moo',
		foobar: 'foo',
		foo: 'bar'
	});
});
