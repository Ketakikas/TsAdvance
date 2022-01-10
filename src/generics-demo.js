var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3, 4];
var strings = ['a', 'b', 'c', 'd'];
var objs = [
    { email: "test@test.com", age: 32 },
    { email: "test@test.com", age: 32 },
    { email: "test@test.com", age: 32 }
];
var addAtBeginning = function (val, arr) {
    return __spreadArray([val], arr, true);
};
var v1 = addAtBeginning(10, [1, 2, 3, 4]);
console.log(v1);
//This is an array as array supports numbers only.
//let v1=addAtBeginning("ABC",[,2,3,4]);
//resolve this using any 
var addBeginning = function (val, arr) {
    return __spreadArray([val], arr, true);
};
var v2 = addBeginning("ABC", [1, 2, 3, 4]);
console.log(v2);
//generics
// here T will take any data type: number, string or any complex type
var fxn = function (val, arr) {
    return __spreadArray([val], arr, true);
};
//calling with numbers
var func1 = fxn(10, [20, 30, 40]);
console.log(func1);
//calling with strings
var func2 = fxn("ABC", ["PQR", "XYZ"]);
console.log(func2);
var getFullName = function (obj) {
    return __assign(__assign({}, obj), { fullname: obj.firstname + " " + obj.lastname });
};
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap" }));
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap", age: 32 }));
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap", age: 43, isAdmin: true }));
