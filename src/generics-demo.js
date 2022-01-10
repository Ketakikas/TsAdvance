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
//calling getFullName() with any number of properties.
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap" }));
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap", age: 32 }));
console.log(getFullName({ firstname: "Ketaki", lastname: "Kashyap", age: 43, isAdmin: true }));
var resource1 = {
    RID: 101,
    Rtype: "Server 01"
};
console.log(resource1);
var resource2 = {
    RID: "102",
    Rtype: "Server 02"
};
console.log(resource2);
//Practice 3
var Employee = /** @class */ (function () {
    function Employee(empid, empAge) {
        this.empid = empid;
    }
    return Employee;
}());
//calling employee with different datatypes
var emp1 = new Employee("EMP001", 32);
var emp2 = new Employee("EMP002", "32");
var emp3 = new Employee(3, 32);
console.log(emp1);
console.log(emp2);
console.log(emp3);
//
