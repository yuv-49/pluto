'use strict';

var _ = require('.');

test('replaces blacklisted words with asterisks', function () {
    return expect((0, _.plutoPlanet)('The name of the speech is speech iteslf', ['speech'])).toBe('The name of the **** is **** iteslf');
});