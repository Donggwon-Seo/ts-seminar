import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import Person, {makePerson} from "./person";
import {init} from "./init";

printHello();
printUser('Donggwon', 24);


const person = makePerson('Donggwon', 24);
console.log(person);

person.printInfo();
Person.printNumberOfPerson();

init(() => console.log('custom initialization finished'));

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['one', 'two', 'three'];
const people: Person[] = [
    makePerson('test', 24, true),
    makePerson('test2', 29)
];

console.log(Array.isArray(people));

for (const index in numbers) {
    console.log(`[${index}] : ${numbers[index]}`);
}

for (const property in person) {
    console.log(`property: ${property}`);
    console.log(`-> ${person[property]}`);
}
console.log(person['printInfo']);

for (const person of people) {
    person.printInfo();
}

// person['name'] = 'test';   // private로 접근지정을 하였으나 변경되는 오류가 발생
// person.printInfo();        // 때문에 readonly 키워드 사용