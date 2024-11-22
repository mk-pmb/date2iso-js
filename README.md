
<!--#echo json="package.json" key="name" underline="=" -->
date2iso
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
return (new Date(...args)).toISOString()
<!--/#echo -->



Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
<!--#verbatim lncnt="13" -->
```javascript
var date2iso = require('date2iso'), tzo;

equal(date2iso(0), '1970-01-01T00:00:00.000Z');
equal(date2iso().slice(0, 5), (new Date()).getFullYear() + '-');

tzo = getTimeZoneOffsetHourForDayAtNoon(2018, 8, 23);
equal(date2iso(2018, 8, 23, 12 + tzo, 34, 56, 789),
              '2018-09-23T12:34:56.789Z');

equal(date2iso('2018-09-23 12:34:56 UTC+0200'),
               '2018-09-23T10:34:56.000Z');
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
