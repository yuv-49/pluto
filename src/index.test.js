import {plutoPlanet} from '.'

test('replaces blacklisted words with asterisks', () => (
    expect (plutoPlanet(
        'The name of the speech is speech iteslf', 
        ['speech']
    ))
    .toBe('The name of the **** is **** iteslf')
))