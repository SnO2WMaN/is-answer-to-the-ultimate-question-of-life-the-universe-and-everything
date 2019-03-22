import test from 'ava'

import is42 from '..'

test('Check 42', t => {
	t.true(is42(42))
})

test('Check "42"', t => {
	t.false(is42('42'))
})

test('Check 41', t => {
	t.false(is42(41))
})
