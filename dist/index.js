"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const danny = new Human('Danny', 33, 'male');
// a method that is called everytime the class starts 
// everytime i creat an object without class
// giving a same property name to arguement name
// property's name is equel to name of constructor's function
// #5 Interfaces on Typescript
// interface Human{
//     name: string;
//     age: number;
//     gender: string;
// }

// if i use a react i have to use a class

// const person = {
//     name: 'Minjae',
//     age: 22,
//     gender: 'male'
// }
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(danny));
//# sourceMappingURL=index.js.map