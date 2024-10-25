"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back";
console.log(typeof null);
var isBeginner = false;
var total = 1000;
var numbers = [1, 2, 3];
var numbers1 = [1, 2, 3];
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("C", c);
var randomValue = 10;
// (randomValue as string).toUpperCase();
randomValue = true;
randomValue = "Hello";
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(randomValue)) {
    console.log(randomValue.name);
}
var multiType;
multiType = 20;
multiType = false;
// static type checking for function parameters
function add(num1, num2) {
    return num1 + num2;
}
add(1, 4);
add(1, 9);
// function with optional parameter
function multiply(num1, num2) {
    if (num2) {
        return num1 * num2;
    }
    else {
        return num1;
    }
}
console.log(multiply(4));
console.log(multiply(4, 5));
// function with default parameters
function division(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 / num2;
}
console.log(division(100));
// function fullName(person:{firstName:string, lastName:string}){
//     console.log(person.firstName+" "+person.lastName);
// }
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName({ firstName: "John", lastName: "Doe" });
// access modifiers
// public
// private
// protected
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.employeeName = name;
        this.employeeAge = age;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning, ".concat(this.employeeName));
    };
    Employee.prototype.getAge = function () {
        console.log("".concat(this.employeeName, " is ").concat(this.employeeAge, " old"));
    };
    return Employee;
}());
var employee = new Employee("Jitendra Suthar", 25);
employee.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, age) {
        return _super.call(this, managerName, age) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager Delegate tasks", this.employeeSalary);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce", 25);
m1.greet();
m1.getAge();
m1.delegateWork();
