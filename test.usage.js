/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

require('usnam-pmb');
var equal = require('assert').strictEqual;

function detectTimeZone() {
  var o = -(new Date()).getTimezoneOffset(), m = o % 60, h = (o - m) / 60;
  return { hr: h, min: m };
}

(function readmeDemo() {
  // #BEGIN# usage demo
  var date2iso = require('date2iso'), tzo = detectTimeZone();

  equal(date2iso(0), '1970-01-01T00:00:00.000Z');

  equal(date2iso(2018, 8, 23, 12 + tzo.hr, 34 + tzo.min, 56, 789),
                '2018-09-23T12:34:56.789Z');

  equal(date2iso('2018-09-23 12:34:56 UTC+0200'),
                 '2018-09-23T10:34:56.000Z');
  // #ENDOF# usage demo
}());


console.log("+OK usage demo test passed."); //= "+OK usage demo test passed."
