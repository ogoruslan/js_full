"use strict";

var PHOTOS = [
    "https://cataas.com/cat?width=500&height=400&1",
    "https://cataas.com/cat?width=500&height=400&2",
    "https://cataas.com/cat?width=500&height=400&3",
    "https://cataas.com/cat?width=500&height=400&4",
    "https://cataas.com/cat?width=500&height=400&5",
    "https://cataas.com/cat?width=500&height=400&6"
];
var AUTOPLAY_MS = 3000;

var track = document.getElementById('track');
var dots = document.getElementById('dots');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var playBtn = document.getElementById('playBtn');
var slider = document.getElementById('slider');

var state = { current: 0, total: PHOTOS.length, playing: true, timer: null };

var wrap = function (i) { return (i + state.total) % state.total; };

function render() {
    track.style.transform = 'translateX(-' + state.current * 100 + '%)';
    dots.querySelectorAll('.dot').forEach(function (d, i) {
        d.classList.toggle('active', i === state.current);
    });
    playBtn.textContent = state.playing ? 'пауза' : 'відтворити';
}

function goTo(i) { state.current = wrap(i); render(); }
function next() { goTo(state.current + 1); }
function prev() { goTo(state.current - 1); }

function play() {
    state.playing = true;
    clearInterval(state.timer);
    state.timer = setInterval(next, AUTOPLAY_MS);
    render();
}
function pause() {
    state.playing = false;
    clearInterval(state.timer);
    render();
}
function toggle() { state.playing ? pause() : play(); }

track.innerHTML = PHOTOS.map(function (src) {
    return '<div class="slide"><img src="' + src + '" alt="Фото котика"></div>';
}).join('');
dots.innerHTML = PHOTOS.map(function (_, i) {
    return '<button class="dot" data-i="' + i + '"></button>';
}).join('');

nextBtn.addEventListener('click', function () { next(); if (state.playing) play(); });
prevBtn.addEventListener('click', function () { prev(); if (state.playing) play(); });
playBtn.addEventListener('click', toggle);
dots.addEventListener('click', function (e) {
    var b = e.target.closest('.dot');
    if (!b) return;
    goTo(+b.dataset.i);
    if (state.playing) play();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { next(); if (state.playing) play(); }
    if (e.key === 'ArrowLeft') { prev(); if (state.playing) play(); }
    if (e.key === ' ') { e.preventDefault(); toggle(); }
});

var startX = 0, dx = 0, dragging = false;
slider.addEventListener('pointerdown', function (e) {
    dragging = true; startX = e.clientX; dx = 0;
    track.classList.add('no-anim');
    pause();
});
slider.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    var pct = (dx / slider.clientWidth) * 100;
    track.style.transform = 'translateX(calc(-' + state.current * 100 + '% + ' + pct + '%))';
});
slider.addEventListener('pointerup', function () {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('no-anim');
    if (dx > 40) prev();
    else if (dx < -40) next();
    else render();
    dx = 0;
});
slider.addEventListener('pointerleave', function () {
    if (dragging) { dragging = false; track.classList.remove('no-anim'); render(); }
});

render();
play();
