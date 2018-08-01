export const plutoPlanet = (content, words) => (
    content.replace(
        new RegExp(words.join('|'), 'ig'),
        '*****'
    )
)