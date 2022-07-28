type PrintUserFunc = (string, number) => void;
type StringNumberType = string | number;  // string 또는 number의 타입을 사용할 경우에 타입 별칭 지정

export const printUser: PrintUserFunc =
    function (name: string, age: number): void {
        console.log(`User's name: ${name}`);
        console.log(`User's name: ${age}`);
    };
