// export function Solution(numbers) {
//     let answer: string ="";
//     let str: string[] = new Array(numbers.length);
//     let swap:string[]= [];
//     //a, b를 비교해서 반환 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬한다.
//
//     numbers.sort((a, b)=>{
//         a=a.toString();
//         b=b.toString();
//         return parseInt(b + a) - parseInt(a + b);
//     });
//     console.log(numbers);
//     answer=numbers.join('');
//
//     return answer;
// }

export function max_num(numbers) {
    let answer: string = "";
    let str: string[] = new Array(numbers.length);
    let swap: string[] = [];
    //a, b를 비교해서 반환 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬한다.

    answer = numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        return parseInt(b + a) - parseInt(a + b);
    }).join('');
    console.log(numbers);
    console.log(answer);

    if (numbers[0] == "0") {
        answer="0";
    }

    return answer;
}
