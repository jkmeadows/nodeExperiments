'use strict';


// Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'this is a baz'; // default value
}
// class methods
Foo.prototype.fooBar = function() {
  console.log("inside the fooBar method")
};

// export the class
module.exports = Foo;