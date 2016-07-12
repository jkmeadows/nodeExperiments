'use strict';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
chai.should();

var sortObj = require('../src/bubbleSort.js');

describe("bubble sort tests", function(){
    
    describe("creating sort obj", function() {
        it("created sort obj", function () {
            assert(sortObj != null, "cannot create sortObj");
        });
    });

    describe("Passing a zero length array", function() {
        it('should return zero length array', function() {
            var array = [];
            var result = sortObj.sort(array);
            assert.equal(0, result.length);
        });
    });

    describe("Passing array with length one", function(){
        it('should return an array of length one', function() {
            var array = [1];
            var result = sortObj.sort(array);
            assert.equal(1, result.length);
        });

    });

    describe("passing array with length 2", function(){
        it('should return array of length two', function(){
            var array = [2, 1];
            var result = sortObj.sort(array);
            assert.equal(2, result.length);
        });
    })

    describe('Passing unsorted array', function(){
        it('should return a sorted array', function() {
            var array = [2, 1];
            var result = sortObj.sort(array);
            assert.equal("1,2", result.toString());
        });
    });

    describe('Passing unsorted array of [3,1]', function(){
        it('should return a sorted array [1,3]', function() {
            var array = [3, 1];
            var result = sortObj.sort(array);
            assert.equal("1,3", result.toString());
        });
    });

    describe('Passing unsorted array of [3,1,7,0,0,-10,3,1021,-7349]', function(){
        it('should return a sorted array [-7349,-10,0,0,1,3,3,7,1021]', function() {
            var array = [3,1,7,0,0,-10,3,1021,-7349];
            var result = sortObj.sort(array);
            assert.equal("-7349,-10,0,0,1,3,3,7,1021", result.toString());
            expect(result.toString()).to.equal("-7349,-10,0,0,1,3,3,7,1021");
            result.toString().should.equal("-7349,-10,0,0,1,3,3,7,1021");
        });
    });

});



