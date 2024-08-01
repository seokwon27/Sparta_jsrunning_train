// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();
// yuno2  /  function a  에서 name 값을 상위 스코프에 선언된 var namer = yuno2 에서 참조함

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();
// 2 / var는 함수 스코프로 funtion에서만 잡을 수 있기 때문에  if문 상위스코프에서 var x = 2 로 선언, 할당 된것과 같이 작동함


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();
// 화살표 함수는 this가 없기 때문에 선언 시점의 상위 스코프가 this로 바인딩 된다.
// 일반 함수는 자신을 호출한 객체를 가르키기 때문에 normal 을 실행시킨 funtion은 this.name이 없음.
