// arr(*****)
const array = [10, 20, 30, 40, 50];
array[0] = 100; // const는 값에 변화 안된다하지 않았나? => array가 갖고있는 것은 주소값
console.log(array);

// 에러남
const array2 = [10, 20, 30];
array2 = [10, 20, 30];
console.log(array2);

/////////////////////////////////////////////////////
const arr = [10, 20, 30];
arr[0] = 100;
console.log(arr);
console.dir(arr);

console.log(arr["length"]);
console.log(arr.length);
console.log(arr[1]);
// console.log(arr.l) // 에러-> 숫자로 들어간 값은 대괄호로만 호출 할 수 있다.

arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능
arr["eunsu"] = 100;
arr.eunsu = 1000;

/////////////////////////////////////////////////////
let array3 = [4, 5, 6];
let array4 = new Array(4, 5, 6); // 이렇게는 많이 사용안함
Array(100).fill(0);
/////////////////////////////////////////////////////
// 배열의 특징
// 1. 배열은 순서가 있음. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 함.
//    이 순서로 호출하는 것을 indexing이라고 함. 배열안에 값을 원소(elements)라고 함.
// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있음.

// 0ckdnjs 1차원, 2차운, 3차원, 다차원
const array5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 매트릭스

console.log(array5[0]); // [1, 2, 3]
console.log(array5[1]); // [4, 5, 6]
console.log(array5[2]); // [7, 8, 9]
console.log(array5[1][2]); // 6

const array6 = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
]; // 3차원 이상: 텐서

// 3. push(), pop(), unshift(), shift()
// push(): 맨 뒤에 값을 넣음
array.push(40);
console.log(array);

// push 실무 예제
// let tableBodyData = []
// for (const iterator of data) {
//     tableBodyData.push(`
//         <tr>
//             <td>${iterator['a']}</td>
//             <td>${iterator['b']}</td>
//             <td>${iterator['c']}</td>
//             <td>${iterator['d']}</td>
//             <td>${iterator['e']}</td>
//             <td>${iterator['f']}</td>
//         </tr>
//     `)
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

// pop(): 뒤에서 값을 꺼내고, 꺼낸 값을 반환함
array.pop();
console.log(array);
const lastValue = array.pop();
console.log(array);

// unshift(): 맨 앞에 값을 넣음
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift(): 앞에서 값을 꺼내고, 꺼낸 값을 반환함.
array.shift();
console.log(array);
const firstValue = array.shift();
console.log(firstValue);

// 4. arr.splice(start, deleteCount, items)
let p = [1, 2, 3];
p.splice(1, 0, 4); // p에 1번째에 아무것도 삭제하지 않고, 4를 넣겠다.
console.log(p); // [1,4,2,3];

let q = [1, 2, 3];
q.splice(1, 0, [10, 20, 30]); // [1,[10,20,30],2,3]

let z = [1, 2, 3];
z.splice(1, 0, 10, 20, 30); // [1,10,20,30,2,3];

// 문제
// ||를 사용해서 답변해주세요.
// const arr = [10, 20, 30, 40, 50]
// const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
// arr.splice(1, 0, ...x);
// arr.splice(7, 0, ...x);

// const arr = [10, 20, 30, 40, 50]
// arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
// console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.

// 5.arr.slice(start, end) end전까지만, 원본은 살아있음.
const fruitArray = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(fruitArray.slice(1, 4)); // ["banana", "cherry", "durian"]
console.log(fruitArray);
console.log(fruitArray.slice(1)); // ["banana", "cherry", "durian", "elderberry"]

// 6. arr.forEach(함수)
// 함수: callbackFunc => 나중에 호출해 줄거야
// const arr = Array(100).fill(0);
// const arr2 = [];

// arr.forEach(function (item, index) {
//   arr2.push(index);
// });

[2, 4, 6, 8, 10].forEach((item) => {
  console.log(item);
});

// 7. arr.map(함수) => forEach와 다르게 새로운 배열을 생성, 데이터를 뽑는다.
// arr.map(function(item, index){
//     return item ** 2
// })

// 실무팁
let tip1 = [1, 2, 3, 4, 5];
// console.log(top1[tip1.length-1]);
// 원본 수정 없이 [1,2,3,4]값과 [5]라는 값을 얻어내고 싶을 때
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [1, 2, 3, 4, 5];
console.log([...tip3, 100, ...tip4]);

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Math.max(...tip5.flat()); // 다차원 배열에서 최솟값, 최댓값 찾기
// tip5.flat(1), tip5.flat(2), tip5.flat(Infinity) : 1번 펼침, 2번 펼침, 끝까지 펼침

let tip6 = new Array(10).fill(0); // new라는 키워들 안적어도 됨

const tip7 = Array.from("hello world");
console.log(tip7); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

".".repeat(100).split(","); // 권장되지 않음

let tip9 = [1, 2, 3, 4, 5];
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]);

let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);
console.log(tip10);

const tip11 = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

const age = tip11.map((item) => item.age);
console.log(age);
