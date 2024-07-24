// 4. 계산기 문제
function calc(매개변수1, 매개변수2, 매개변수3) {
    if(매개변수2 === "+"){
        return 매개변수1 + 매개변수3;
    };
    if(매개변수2 === "-"){
        return 매개변수1 - 매개변수3;
    };
    if(매개변수2 === "*"){
        return 매개변수1 * 매개변수3;
    };
    if(매개변수2 === "/"){
        return 매개변수1 / 매개변수3;
    };
}

console.log(calc(3, "+", 6)); // 결과값 9
console.log(calc(11, "-", 6)); // 결과값 5
console.log(calc(6, "*", 3)); // 결과값 18
console.log(calc(15, "/", 3)); // 결과값 5

