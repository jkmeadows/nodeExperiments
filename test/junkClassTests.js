
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var JunkyClass = require('../src/junkClass.js');
var junkObj = new JunkyClass(); /* this only works if
                                the junkClass.js file defines a constructor and 
                                exports the entire class instead of individual methods.
                                Then each method you want to export from the class must 
                                be defined as MyClass.prototype.MyPublicMethod.
                                Otherwise just use the file path var as the class.
                                */
                                 

describe/*.only*/("JunkClass tests", function(){
    
    describe("Calls a property", function() {
        it("got property value", function () {
            var result = junkObj.testProperty;
            expect(result).to.equal(1);
        });
    });
 
    describe("Calls a function", function() {
        it("testFunction increments by 1", function () {
            var result = junkObj.testFunction(1);
            expect(result).to.equal(2);
        });

        it("testFunction increments by 1 again", function () {
            var result = junkObj.testFunction(2);
            expect(result).to.equal(3);
        });
    });

});
    
