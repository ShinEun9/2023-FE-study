// 1. arr.filter(callbackFunc)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (item) {
  return item % 2 == 1;
});

Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v)); // 모음제거

// 2. arr.reduce((accumulator, currentValue) => a + c, initialValue); -> initialValue 항상 필수
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2.reduce((a, c) => a + c, 0));

// 3. arr.includes()
const arr3 = ["hello", "world", "eunsu"];
console.log(arr3.includes("world")); // true
console.log(arr3.includes("word")); //false

// 4. join
const arr4 = ["hello", "world", "eunsu"];
console.log(arr4.join("-"));

const arr5 = [010, 5044, 2933];
const arr6 = ["010", "5044", "2933"];
console.log(arr5.join("-")); // 이렇게 하지 않기 8-5044-2933 - 8진법
console.log(arr6.join("-"));
// 0b100 b는 바이너리
// 0o100 o는 옥타
// 0x100 xsms gprtk
