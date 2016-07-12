'use strict';

var fooFile = require('../src/objectsClasses.js');
var fooObj = new fooFile([1,2,3]);

fooObj.fooBar();
console.log("bar=" + fooObj.bar);
console.log("baz=" + fooObj.baz);

fooObj.dynamicProp = "kevin dynamic prop";
console.log("dynamicProp=" + fooObj.dynamicProp);