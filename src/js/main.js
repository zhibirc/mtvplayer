/**
 * Main application file.
 */

'use strict';

var m      = require('mithril'),
    player = require('./modules/player'),
    doc    = document;

doc.addEventListener('DOMContentLoaded', function () {
    m.render(doc.body, 'hello world');

    m('video', {id: 'player', class: 'video-js'}, '');
    m('div', {id: "playerContainer"}, "")
});
