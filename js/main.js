/*
    `this`
 */

function Thing() {}
Thing.prototype.foo = "bar";

function logFoo(aStr) {
    console.log(aStr, this.foo);
}

var thing = new Thing();
logFoo.bind(thing)("using bind"); //logs "using bind bar"
logFoo.apply(thing, ["using apply"]); //logs "using apply bar"
logFoo.call(thing, "using call"); //logs "using call bar"
logFoo("using nothing"); //logs "using nothing undefined"

// — via http://bjorn.tipling.com/all-this