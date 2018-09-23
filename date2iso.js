/*jslint indent: 2, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function date2iso(y, m, d, h, i, s, l) {
  var a = arguments.length;
  return ((a === 0 && new Date())
    || (a === 1 && new Date(y))
    || new Date((y || 0), (m || 0), (d || 0),
      (h || 0), (i || 0), (s || 0), (l || 0))
    ).toISOString();
}
module.exports = date2iso;
