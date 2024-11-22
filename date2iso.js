/*jslint indent: 2, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function date2iso(y, m, d, h, i, s, l) {
  var a = arguments.length;
  try {
    return ((a === 0 && new Date())
      || (a === 1 && new Date(y))
      || new Date((y || 0), (m || 0), (d || 0),
        (h || 0), (i || 0), (s || 0), (l || 0))
      ).toISOString();
  } catch (c) {
    a = (a > 1 ? ('[' + [].join.call(arguments, ', ') + ']') : ('"' + y + '"'));
    a = new Error('Cannot convert date ' + a + ' to ISO format: ' + c);
    throw a;
  }
}
module.exports = date2iso;
