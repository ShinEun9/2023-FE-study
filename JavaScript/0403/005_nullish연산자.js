let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);
console.log(firstName ?? lastName ?? nickName ?? "익명사용자");

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c);

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

let height2;
console.log(height2 || 100); // 100
console.log(height2 ?? 100); // 100

let height3 = "";
console.log(height3 || "hello"); // hello
console.log(height3 ?? "world"); // ""

// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined
