// 함수 사용이유
// 1. 재사용성이 높아집니다.
// 2. 유지보수가 용이합니다.
// 3. 구조 파악이 용이합니다.

// 파선아실
// 1. 함수의 일반적인 형태
function one(a, b) {
  let z = a + b;
  return z ** 2;
}
console.log(one(7, 3));

// 2. 화살표 함수
const two = (a, b) => (a + b) ** 2;
console.log(two(7, 3));

// 3. 이름없이 선언하는 함수
const three = function (a, b) {
  let z = a + b;
  return z ** 2;
};
console.log(three(7, 3));

// 4. 콜백함수: 함수를 argument로 전달해서 언젠가 사용해줄게 라는 의미.
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}
four(7, 3, one);

// 아래와 같이 했을 때 함수의 순수성, 순수함수의 장점을 살릴 수 없음.
// 외부에서 직접 값을 가져오는 것을 지양하자.
function five(a, b) {
  let z = one(a, b) + one(a, b);
  return z * 2;
}
five(7, 3);

//////////////////////////////////////////////////////////////////////////////////////
// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수 => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수이다.

// 아래 3개의 hello 함수 코드는 같은 코드.
function hello() {
  console.log("hello");
}
function hello() {
  console.log("hello");
  return;
}
function hello() {
  console.log("hello");
  return undefined;
}

function hello5() {
  if (true) {
    if (true) {
      if (true) return;
    }
  }
  console.log("hello"); // 출력안됨.
}

const x = [10, 20, 30, 40];
x.forEach((el) => {
  console.log(el);
  return;
  console.log("world!");
}); // return 됐으니 10만 출력된다고 생각할 수 있으나, 10/20/30/40 모두 출력됨
// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아님

/////////////////////////////////
function 함수1(a, b, c) {
  return a + b + c;
}

// 함수1(10, 20, 30, 40); // 필요 이상의 아규먼트를 넣었을 때 60출력
// 함수1(10, 20); // error가 발생하지 않는다. NaN

function 함수1(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수1(1, 1); // 32 출력
함수1((a = 1), (c = 1)); // a와 c에 들어갈것이라고 생각했지만 a와 b에 들어감 32출력

// roro 기법
function runPython(user, time, code, lv) {}
runPython("ShinEunSu", 100, "function...", 3); //  100이 뭐지? 3은 뭐지? 헷갈릴 수 있다.

function runPython({ user, time, code, lv }) {} // 그럴 때 object로 넘기면 식별이슈를 해결할 수 있다.
runPython({
  user: "leehojun",
  time: 100,
  code: "function...",
  lv: 3,
});

// 기본값 설정
function runPython({ user = "", time = 0, code = "", lv = 0 }) {}

//////////////////

// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y;
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y;

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = (x) => {
  return x + 10;
};

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = (x) => x + 10;

let 결과 = 함수3(2);

console.log(결과); // 12

// 즉시 실행 함수
(function () {
  console.log("이 함수는 만들어지자마자 바로 실행됩니다!");
})();

function 함수() {}

함수();
