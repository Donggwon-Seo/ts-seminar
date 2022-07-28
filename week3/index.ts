import {occurErrorMethod} from "./occur-error.method";
import {Valuable, IValuable} from "./valuable";
import {printValue} from "./print-value";
import {parseNumber} from "./parse-number";
import {mergeObjects} from "./merge-object";
import {ISquare, ICircle, IRectangle} from "./shape";
import {calculatorArea} from "./calculator-area";
import Fish from "./fish";
import Bird from "./bird";
import {flyOrSwim} from "./fly-or-swim";
import {readFile, readFileSync} from "fs";
import {readFilePromise} from "./read-file.promise";


// try {
//     // 에러가 발생할 수도 있는 부분
//     occurErrorMethod();
// } catch (e) {
//     // 에러를 처리하는 부분
//     console.log(`Error message: ${e.message}`);
// } finally {
//     // 에러 발생 여부와 관계없이 무조건 실행
//     console.log('무조건 실행됩니다.')
// }
//
// // 타입제한을 하지 않으면 ts가 타입추론을 통해 타입을 지정한다.
// // 하지만 명시해주는 것이 좋다.
//
// printValue(new Valuable<number>(1));
// printValue(new Valuable<boolean>(true));
// printValue(new Valuable<string>('hello'));
// printValue(new Valuable<number[]>([1, 2, 3]));
//
// parseNumber<string, IValuable<string>>(new Valuable<string>('123'));
//
// type INameable = {
//     name: string
// };
//
// type IAgeable = {
//     age: number
// };
//
// const objectWithNameAndAge: INameable & IAgeable = mergeObjects(
//     {name: 'Donggwon'}, {age: 24}
// );
//
// console.log(objectWithNameAndAge);
//
// const square: ISquare = {
//     tag: 'square',
//     side: 10
// };
//
// const rectangle: IRectangle = {
//     tag: 'rectangle',
//     width: 4,
//     height: 5
// };
//
// const circle: ICircle = {
//     tag: 'circle',
//     radius: 10
// }
//
// console.log(
//     calculatorArea(square),
//     calculatorArea(rectangle),
//     calculatorArea(circle)
// );
//
// const bird: Bird = new Bird()
// const fish: Fish = new Fish();
//
// flyOrSwim(bird);
// flyOrSwim(fish);

//console.log('파일을 비동기식으로 읽는중..');

//readFile(./package.json', (error: Error, buffer: Buffer) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(buffer.toString());
//     }
// });
//
// console.log('파일을 동기식으로 읽는중..');
// const buffer: Buffer = readFileSync('./package.json');
// console.log(buffer.toString());

// readFilePromise('./package.json')
//     .then((value: string) => {
//         // 성공시
//         console.log(value);
//         // throw new Error('hello error');
//         return readFilePromise('./tsconfig.json');
//     })
//     .then((value: string) => {
//         console.log('print tsconfig.json');
//         // throw new Error('hello error');
//         console.log(value);
//     })
//     .catch((error) => {
//         // then 실행 중 에러 발생시 바로 잡아줌
//         console.error(error);
//     });

const asyncFunction = async (): Promise<void> => {
    const result = await readFilePromise('./package.json');
    console.log(result);
    const result2 = await readFilePromise('./tsconfig.json');
    console.log(result2);

};

asyncFunction();
