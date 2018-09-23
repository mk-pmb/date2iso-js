/*jslint indent: 2, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function date2iso(y, m, d, h, i, s, l) {
  return (arguments.length === 1 ? new Date(y)
    : new Date(y, m, d, h, i, s, l)).toISOString();
}
module.exports = date2iso;
