
function JunkClass(params) {
    this.testProperty = 1;

};

JunkClass.prototype.testFunction = function(value) {
    return value += 1;
}

module.exports = JunkClass

;
