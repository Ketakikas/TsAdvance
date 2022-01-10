//namesapce creation
var MySounds;
(function (MySounds) {
    MySounds.dogSound = "Buff Buff";
    MySounds.speak = function () { return "Hello World"; };
    //nested namespace creation and then export it
    var Duck;
    (function (Duck) {
        Duck.speak = "Quack Quack";
    })(Duck = MySounds.Duck || (MySounds.Duck = {}));
})(MySounds || (MySounds = {}));
console.log(MySounds.dogSound);
console.log(MySounds.speak());
console.log(MySounds.Duck.speak);
//<reference path="./util.ts"/>
console.log(MySounds.dogSound);
