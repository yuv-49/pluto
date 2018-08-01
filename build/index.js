'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var plutoPlanet = exports.plutoPlanet = function plutoPlanet(content, words) {
    return content.replace(new RegExp(words.join('|'), 'ig'), '*****');
};