/*
Class: access modifiers- priavte, public and protected
Getter/Setter methods
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this._species = "DEFAULT";
    }
    Object.defineProperty(Animal.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (newVal) {
            if (newVal.length > 3) {
                this._species = newVal;
            }
            else {
                this._species = "DEFAULT";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var tiger = new Animal();
tiger.species = "TIGER";
console.log(tiger.species);
function aboutUser(username, age, isAdmin) {
    if (age != undefined && isAdmin != false) {
        return "About username:".concat(username, "| Age: ").concat(age, "| isAdmin: ").concat(isAdmin);
    }
    else if (age != undefined && isAdmin == false) {
        return "About username:".concat(username, "| Age: ").concat(age);
    }
    else {
        return "About username:".concat(username);
    }
}
//intellisense will show 3 overloaded methods
console.log(aboutUser("Ketaki Kashyap"));
console.log(aboutUser("Ketaki Kashyap", 32));
console.log(aboutUser("Ketaki Kashyap", 32, true));
//Abstract Classes
var Fighter = /** @class */ (function () {
    function Fighter() {
    }
    Fighter.prototype.move = function () {
        console.log("Kicking");
    };
    return Fighter;
}());
var Ryu = /** @class */ (function (_super) {
    __extends(Ryu, _super);
    function Ryu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ryu.prototype.fight = function () {
        return 'Lightening Kick';
    };
    return Ryu;
}(Fighter));
var ryu = new Ryu();
console.log(ryu.fight());
ryu.move();
var MyResource = /** @class */ (function () {
    function MyResource() {
        this.id = "101";
    }
    MyResource.prototype.getDetails = function () {
        return this.id;
    };
    ;
    return MyResource;
}());
var obj = new MyResource();
console.log("Id: " + obj.getDetails());
