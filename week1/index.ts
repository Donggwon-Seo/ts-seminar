// import {helloMessage, helloUser} from "./hello.method";
import *as HelloMethods from "./hello.methods"; //객체처럼 import

import user, {Person} from "./user";

HelloMethods.helloMessage("World");
HelloMethods.helloUser(user);

console.log(`Number of Person: ${Person.numberOfPerson}`);

const {name, age} = user; //비구조 할당문 - 원하는 정보만 가져옴
console.log(name);
console.log(age);