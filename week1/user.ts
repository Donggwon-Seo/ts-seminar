export interface IPerson {
    sayName(): void;
    sayAge(): void;
}

export class Person implements IPerson{
    static numberOfPerson: number = 0;

    constructor(public name :string, public age: number) {
        Person.numberOfPerson++;
        this.name = name;
        this.age = age;
    }

    sayName(): void {
        console.log(`My name is ${this.name}`);
    }

    sayAge(): void {
        console.log(`My age is ${this.age}`);
    }
}

const user: Person = new Person("Donggwon", 24);

export default user;