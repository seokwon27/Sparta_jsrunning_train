//1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
 
];

// 여기에 코드를 작성해주세요
arr = students
.filter((student) => {
  let avg =
  student.scores.reduce((a,b)=> a + b , 0) / student.scores.length;
  return avg >= 80;
})
.map((student) => student.name);

console.log(arr);
// 예상 출력: ["이재상", "김준현"]

//2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
console.log(numbers.map((a) => a*2).filter((a) => a <= 30));