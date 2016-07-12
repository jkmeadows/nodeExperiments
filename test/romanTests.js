'use strict';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var romanFile = require('../src/RomanNums.js');
//var romanObj = new romanFile();

describe("Roman Numeral tests", function(){
    
    describe("OnePlusOneEqualsTwo", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("I", "I");
            expect(result.toString()).to.equal("II");
        });
    });

    describe("OnePlusTwoEqualsThree", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("I", "II");
            expect(result.toString()).to.equal("III");
        });
    });

    describe("TwoPlusOneEqualsThree", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("II", "I");
            expect(result.toString()).to.equal("III");
        });
    });

    describe("OnePlusThreeEqualsFour", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("I", "III");
            expect(result.toString()).to.equal("IV");
        });
    });

    describe("OnePlusFourEqualsFive", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("I", "IV");
            expect(result.toString()).to.equal("V");
        });
    });

    describe("FourPlusOneEqualsFive", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("IV", "I");
            expect(result.toString()).to.equal("V");
        });
    });

    describe("TwoPlusThreeEqualsFive", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("II", "III");
            expect(result.toString()).to.equal("V");
        });
    });

    describe("ThreePlusTwoEqualsFive", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("III", "II");
            expect(result.toString()).to.equal("V");
        });
    });

    describe("TwoPlusFourEqualsSix", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("II", "IV");
            expect(result.toString()).to.equal("VI");
        });
    });

    describe("FourPlusTwoEqualsSix", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("IV", "II");
            expect(result.toString()).to.equal("VI");
        });
    });

    describe("SixPlusOneEqualsSeven", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("VI", "I");
            expect(result.toString()).to.equal("VII");
        });
    });

    describe("FourPlusFourEqualsEight", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("IV", "IV");
            expect(result.toString()).to.equal("VIII");
        });
    });

    describe("SixPlusFourEqualsTen", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("VI", "IV");
            expect(result.toString()).to.equal("X");
        });
    });

    describe("FourPlusSixEqualsTen", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("IV", "VI");
            expect(result.toString()).to.equal("X");
        });
    });

    describe("FivePlusFiveEqualsTen", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("V", "V");
            expect(result.toString()).to.equal("X");
        });
    });

    describe("FivePlusTenEqualsFifteen", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("V", "X");
            expect(result.toString()).to.equal("XV");
        });
    });

    describe("TenPlusTenEqualsTwenty", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("X", "X");
            expect(result.toString()).to.equal("XX");
        });
    });

    describe("TenPlusFifteenEqualsTwentyFive", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("X", "XV");
            expect(result.toString()).to.equal("XXV");
        });
    });

    describe("FourteenPlusFourteenEqualsTwentyEight", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XIV", "XIV");
            expect(result.toString()).to.equal("XXVIII");
        });
    });

    describe("FifteenPlusFourteenEqualsTwentyNine", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XV", "XIV");
            expect(result.toString()).to.equal("XXIX");
        });
    });

    describe("TwentyPlusTwentyNineEqualsFortyNine", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XX", "XXIX");
            expect(result.toString()).to.equal("XLIX");
        });
    });

    describe("TwentyPlusThirtyEqualsFifty", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XX", "XXX");
            expect(result.toString()).to.equal("L");
        });
    });

    describe("TwentyNinePlusThirtyEqualsFiftyNine", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XXIX", "XXX");
            expect(result.toString()).to.equal("LIX");
        });
    });

    describe("FortyPlusFiftyEqualsNinety", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XL", "L");
            expect(result.toString()).to.equal("XC");
        });
    });

    describe("FortyPlusFiftyNineEqualsNinetyNine", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("XL", "LIX");
            expect(result.toString()).to.equal("XCIX");
        });
    });

    describe("FiftyPlusFiftyEqualsOneHundred", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("L", "L");
            expect(result.toString()).to.equal("C");
        });
    });

    describe("OneHundredPlusOneEqualsOneHundredOne", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("C", "I");
            expect(result.toString()).to.equal("CI");
        });
    });

    describe("OnePlusOneOneHundredEqualsOneHundredOne", function() {
        it("added numbers correctly", function () {
            var result = romanFile.Add("I", "C");
            expect(result.toString()).to.equal("CI");
        });
    });


});
