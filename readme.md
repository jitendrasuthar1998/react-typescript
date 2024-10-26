Here's a comprehensive README file for this TypeScript code example.

---

# TypeScript Basics Example

This repository demonstrates fundamental TypeScript concepts using a variety of examples, covering types, interfaces, classes, and functions. It's designed to help developers understand and get hands-on experience with TypeScript's powerful static typing features and object-oriented principles.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Features](#features)
4. [TypeScript Concepts Demonstrated](#typescript-concepts-demonstrated)
5. [Usage](#usage)
6. [Examples](#examples)
7. [License](#license)

## Introduction
This example serves as a comprehensive guide for beginners to TypeScript. It introduces key TypeScript features like basic types, unions, interfaces, classes, access modifiers, enums, and function parameter handling.

## Setup
To run this example, make sure you have **Node.js** and **TypeScript** installed on your system.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/typescript-basics-example.git
   cd typescript-basics-example
   ```

2. **Install TypeScript** (if not installed):
   ```bash
   npm install -g typescript
   ```

3. **Compile the TypeScript file**:
   ```bash
   tsc index.ts
   ```

4. **Run the Compiled JavaScript**:
   ```bash
   node index.js
   ```

## Features
- Basic TypeScript types and type inference.
- Unions, tuples, and enums.
- Interface-based typing for function parameters.
- Classes with access modifiers (public, private, protected).
- Function parameters with optional and default values.
- Type assertions and custom type guards.

## TypeScript Concepts Demonstrated

### 1. **Basic Types and Type Inference**
   - Declaring `string`, `boolean`, `number` and `array` types.
   - **Example**: `let total: number = 1000;`

### 2. **Enums**
   - **Color Enum** with custom numeric values to represent colors.
   - **Example**:
     ```typescript
     enum Color { Red = 5, Green, Blue }
     let c: Color = Color.Green;
     ```

### 3. **Unknown and Type Assertion**
   - Using `unknown` type and type assertions to safely handle dynamic types.
   - **Example**:
     ```typescript
     let randomValue: unknown = 10;
     randomValue = "Hello";
     ```

### 4. **Function Types**
   - **Function Parameter Types**: Static type checking for function parameters.
   - **Optional Parameters**: Making function parameters optional using `?`.
   - **Default Parameters**: Providing default values to function parameters.
   - **Example**:
     ```typescript
     function multiply(num1: number, num2?: number): number {
       return num2 ? num1 * num2 : num1;
     }
     ```

### 5. **Interfaces**
   - Creating interfaces to enforce structure for objects.
   - Optional properties with `?` syntax.
   - **Example**:
     ```typescript
     interface Person {
       firstName: string;
       lastName: string;
       address?: string;
     }
     ```

### 6. **Classes and Access Modifiers**
   - **Public, Private, and Protected Members**: Controlling access to class properties.
   - **Inheritance**: Extending classes and overriding methods.
   - **Example**:
     ```typescript
     class Employee {
       public employeeName: string;
       private employeeAge: number;
       protected employeeSalary: number;
       constructor(name: string, age: number) {
         this.employeeName = name;
         this.employeeAge = age;
       }
       greet() {
         console.log(`Good morning, ${this.employeeName}`);
       }
     }
     ```

## Usage
To explore each feature:
1. Open `index.ts` in a TypeScript-compatible editor.
2. Read through the examples and comments in each section to understand the syntax and functionality.
3. Modify the code if you'd like to experiment with the TypeScript features.

## Examples
### Type Inference and Type Checking
```typescript
let message: string = "Welcome back";
console.log(typeof null);
```

### Enum Usage
```typescript
enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
console.log("C", c);
```

### Optional and Default Parameters
```typescript
function division(num1: number, num2: number = 10): number {
  return num1 / num2;
}
console.log(division(100));
```

### Class and Inheritance
```typescript
class Manager extends Employee {
  constructor(managerName: string, age: number) {
    super(managerName, age);
  }
  delegateWork() {
    console.log("Manager delegates tasks");
  }
}

const m1 = new Manager("Bruce", 25);
m1.greet();
m1.delegateWork();
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README offers a structured overview of the TypeScript features used in the example, providing new TypeScript users with clear, detailed explanations and practical examples.