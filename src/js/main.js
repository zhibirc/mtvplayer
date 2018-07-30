/**
 * Main application file.
 */

'use strict';

var m          = require('mithril'),
    videojsLib = require('video.js'),
    doc        = document;

console.log(videojsLib);

doc.addEventListener('DOMContentLoaded', function () {
    m.render(doc.body, 'hello world');

    var f = m('video', {id: 'player', class: 'video-js', type: 'video/mp4', src: 'https://www.youtube.com/watch?v=twSn58BPgWM'}, 'player not working');

    m.render(doc.getElementById('app'), f);

    //player.play();
});
