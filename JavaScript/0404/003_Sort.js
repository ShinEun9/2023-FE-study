let avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

const nums = [3, 1, 8, 6];
console.log(nums.sort()); // [1, 3, 6, 8]

const nums2 = [23, 5, 1000, 42];
console.log(nums2.sort()); // [1000, 23, 42, 5]
// sort를 어느 알고리즘으로 할지는 브라우저의 자유

// a-b가 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬. 즉 a가 먼저옴
console.log(nums.sort((a, b) => a - b)); // 오름차순
console.log(nums.sort((a, b) => b - a)); // 내림차순

// 딥하게 sort 탐색하기
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
    console.log(a - b);
    return a - b;
  })
);

// 실무사용코드
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}
