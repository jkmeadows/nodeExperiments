//'use strict';

function MobClass(params) {
    this.globalVariable = 0;
}

MobClass.prototype.Add = function (params) {
    return 2;
}

MobClass.prototype.Increment = function (incrementBy) {
    this.globalVariable += incrementBy;
}

module.exports = MobClass;
