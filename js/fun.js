/**
 * Char at
 */

"0123".charAt("1"); // "1"
"0123".charAt(1.45); // "1"
"0123".charAt([1]); // "1"
"0123".charAt(true); // "1"
"0123".charAt(); // "0"
"0123".charAt(NaN); // "0"
"0123".charAt(-2); // ""

Number.prototype.charAt = String.prototype.charAt;
NaN.charAt(); // "N"

Boolean.prototype.charAt = String.prototype.charAt;
true.charAt(); // "t"


/**
 * Array & undefined
 */

Array(2); // [undefined, undefined]

var a = Array(2),
    b = [undefined, undefined];

a[0] === b[0]; // true
a[1] === b[1]; // true
a.length === b.length; // true

a.map(alert); // no alert
b.map(alert); // alert × 2

1 in a; // false
1 in b; // true


// Dmitry Baranovskiy: Zen of JavaScript | JSConf EU 2015
// https://www.youtube.com/watch?v=QHs55-5FzgA