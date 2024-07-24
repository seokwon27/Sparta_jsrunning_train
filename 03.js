// 3. 홀짝 판별기
function divide(매개변수) {
    if(매개변수 % 2 === 0){
        return "짝수"
    }
    return "홀수"
}

console.log(divide(10)); // 결과값 "짝수";
console.log(divide(7)); // 결과값 "홀수";