export {};

let message:string = "Welcome back";
console.log(typeof null);

let isBeginner: boolean = false;

let total: number = 1000;

let numbers: number[] = [1,2,3];
let numbers1 : Array<number> = [1,2,3];

let person1:[string, number] = ["Chris", 22];

enum Color {Red=5, Green, Blue};

let c: Color = Color.Green;

console.log("C",c);

let randomValue: unknown = 10;

// (randomValue as string).toUpperCase();

randomValue = true;
randomValue = "Hello";

function hasName(obj:any): obj is {name:string}{
    return !!obj && typeof obj === "object" && "name" in obj
}

if(hasName(randomValue)){
    console.log(randomValue.name);
}

let multiType: number | boolean;

multiType = 20;

multiType = false;


// static type checking for function parameters

function add(num1:number, num2:number):number{
    return num1 + num2;
}

add(1,4);

add(1,9)

// function with optional parameter
function multiply(num1:number, num2?:number):number{
    if(num2){
        return num1 * num2;
    }else{
        return num1;
    }
}

console.log(multiply(4))
console.log(multiply(4,5))

// function with default parameters

function division(num1:number, num2:number = 10){
    return num1 / num2
}

console.log(division(100));


// property of interface is optional
interface Person{
    firstName:string;
    lastName: string;
    address?: string; // optional property
}

// function fullName(person:{firstName:string, lastName:string}){
//     console.log(person.firstName+" "+person.lastName);
// }

function fullName(person:Person){
    console.log(person.firstName+" "+person.lastName);
}

fullName({firstName: "John", lastName: "Doe"})

// access modifiers

// public
// private
// protected

class Employee{
    employeeName: string;

    private employeeAge: number;

    protected employeeSalary: number;

    constructor(name:string, age:number){
        this.employeeName = name;
        this.employeeAge = age;
    }

    greet(){
        console.log(`Good morning, ${this.employeeName}`)
    }

    getAge(){
        console.log(`${this.employeeName} is ${this.employeeAge} old`)
    }
}

const employee = new Employee("Jitendra Suthar",25);

employee.greet();


class Manager extends Employee{
    constructor(managerName: string, age:number){
        super(managerName, age);
    }

    delegateWork(){
        console.log("Manager Delegate tasks", this.employeeSalary);
    }
}

const m1 = new Manager("Bruce",25);
m1.greet();
m1.getAge();
m1.delegateWork();