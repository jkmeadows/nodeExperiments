'use strict';

function RomanNums() {
    
};

function Add(rn1, rn2){

    var result = null;

    rn1 = ConvertToI(rn1);
    rn2 = ConvertToI(rn2);
    result = concatenate(rn1, rn2);
    result = ConvertFromI(result);

    return result;
};

function ConvertToI(romanNum)
{
    if (romanNum == "I" || romanNum == "II" || romanNum == "III")
        return romanNum;
    
    var result = null; 
    result = romanNum.replace(/IV/g, "IIII");
    result = result.replace(/V/g, "IIIII");
    result = result.replace(/IX/g, "IIIIIIIII");
    result = result.replace(/XL/g, "XXXX");
    result = result.replace(/L/g, "XXXXX");
    result = result.replace(/XC/g, "XXXXXXXXX");
    result = result.replace(/C/g, "XXXXXXXXXX");
    result = result.replace(/X/g, "IIIIIIIIII");
    
    console.log(result);
    return result;
}

function ConvertFromI(romanNum)
{
    if (romanNum == "I" || romanNum == "II" || romanNum == "III")
        return romanNum;
    
    var result = null; 
    result = romanNum.replace(/IIIIIIIIII/g, "X");
    result = result.replace(/IIIIIIIII/g, "IX");
    result = result.replace(/XXXXXXXXXX/g, "C");
    result = result.replace(/XXXXXXXXX/g, "XC");
    result = result.replace(/XXXXX/g, "L");
    result = result.replace(/XXXX/g, "XL");
    result = result.replace(/IIIII/g, "V");
    result = result.replace(/IIII/g, "IV");

    return result;
}

function concatenate(s1, s2) {
    return s1 + s2;
}

module.exports = {
    Add: Add
};
  
    

