const human = {
  name: "eunsu",
  age: 25,
  from: "korea",
  askingHer: function () {
    console.log("hello world");
  },
  0: "0100000000",
};

console.log(human.name);
console.log(human.age);
console.log(human["name"]);
console.log(human["age"]);

// console.log(human.0); //error
console.log(human["0"]);
console.log(human[0]);

human.name = "su";
console.log("age" in human); // true
// console.log(20 in [10,20,30,40]) // false: in연산자가 key를 순회해서 false
// console.log('length' in [10,20,30,40]) // true

const aespa = {
  members: ["카리나", "윈터", "지젤", "닝닝"],
  from: "광야",
  sing: function () {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!";
  },
};

// 별표(**)
console.log(aespa.hasOwnProperty("itzy")); // false
console.log(aespa.hasOwnProperty("sing")); // true

// 별표(***)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용함
console.log(Object.keys(aespa)); //  ['members', 'from', 'sing']
console.log(Object.values(aespa)); //

/////////////////////////////////////////////////////////
// 밑의 코드는 배열이 아님. 유사 배열 객체라고함.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠름
