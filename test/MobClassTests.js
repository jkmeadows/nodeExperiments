
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var MobClass = require('../src/mobClass.js');
var mobClass = new MobClass();

describe/*.only*/("MobClass tests", function(){
    
    describe("OnePlusOneEqualsTwo", function() {
        it("added numbers correctly", function () {
            var result = mobClass.Add(1, 1);
            expect(result).to.equal(2);
        });
    });

    describe("MobClass Shared beforeEach", function() {
        beforeEach(function()
            {
                mobClass = new MobClass();
            }
        )
        it('increment by one first time', function(){
            expect(mobClass.globalVariable).to.equal(0);
            mobClass.Increment(1);
            expect(mobClass.globalVariable).to.equal(1);
        });

        it('increment by one second time', function(){
            expect(mobClass.globalVariable).to.equal(0);
            mobClass.Increment(1);
            expect(mobClass.globalVariable).to.equal(1);
        })
    })


    describe("MobClass Shared without beforeEach retains state", function() {
        var mobClass = new MobClass();

        it('increment by one first time', function(){
            expect(mobClass.globalVariable).to.equal(0);
            mobClass.Increment(1);
            expect(mobClass.globalVariable).to.equal(1);
        });

        it('increment by one second time', function(){
            expect(mobClass.globalVariable).to.equal(1);
            mobClass.Increment(1);
            expect(mobClass.globalVariable).to.equal(2);
        })
    })

});