/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

require('usnam-pmb');
var assert = require('assert'), equal = assert.strictEqual;

function getTimeZoneOffsetHourForDayAtNoon(y, m, d) {
  var o = -(new Date(y, m, d, 12, 0, 0)).getTimezoneOffset();
  return Math.round(o / 60);
  // Sorry if you're living in a timezone with minute offsets.
}

(function readmeDemo() {
  // #BEGIN# usage demo
  var date2iso = require('date2iso'), tzo;

  equal(date2iso(0), '1970-01-01T00:00:00.000Z');
  equal(date2iso().slice(0, 5), (new Date()).getFullYear() + '-');

  tzo = getTimeZoneOffsetHourForDayAtNoon(2018, 8, 23);
  equal(date2iso(2018, 8, 23, 12 + tzo, 34, 56, 789),
                '2018-09-23T12:34:56.789Z');

  equal(date2iso('2018-09-23 12:34:56 UTC+0200'),
                 '2018-09-23T10:34:56.000Z');
  // #ENDOF# usage demo
}());


console.log("+OK usage demo test passed."); //= "+OK usage demo test passed."
