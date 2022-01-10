//NOT CLEAR
// Decorators
// these are annotations
// great for meta programming (meta data) with class method, properties and method parameters
//to supply meta information to classes and its variables and methods
// these are simple functions prefix with @ symbol
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Component(target:Function){
//     target.prototype.nid="N1099";
// }
// @Component
// class Ninja{
//     nid:string="N007";
// }
// let blackNinja=new Ninja();
// console.log("ID: "+blackNinja.nid);
//
function Log(target, propertyKey, propertyDecriptor) {
    console.log("Target: " + target);
    console.log("Key: ", propertyKey);
    propertyDecriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello from ".concat(args[0]);
    };
    console.log("Decriptor: ", propertyDecriptor);
}
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.printNinja = function (str) {
        return "Black belt ninja" + str;
    };
    __decorate([
        Log
    ], ABC.prototype, "printNinja");
    return ABC;
}());
var ninja2 = new ABC();
console.log(ninja2.printNinja("Yellowninja"));
