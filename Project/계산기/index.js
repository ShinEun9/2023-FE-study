const buttons = document.querySelectorAll("button");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
let calculateClick = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", btnClick);
});

function btnClick(event) {
  const value = event.target.textContent;

  // 이미 = 을 누른 상태에서 다음 키를 눌렀을 때 어떻게 동작할지
  if (calculateClick) {
    // 다음 키가 연산자일 때
    if (!Number(value)) {
      input.textContent = output.textContent;
      output.textContent = "";
    }
    // 다음키가 숫자일 때
    else {
      input.textContent = "";
      output.textContent = "";
    }

    calculateClick = false;
  }

  if (value === "C") {
    input.textContent = "";
    output.textContent = "";
    caluculateClick = false;
  } else if (value === "=") {
    calculate();
    calculateClick = true;
  }
  // * 숫자나 연산자일때
  else {
    const inputLength = input.textContent.length;
    const lastValue = input.textContent[inputLength - 1];

    // 맨처음 입력 시 +6 또는 -6 가능하게 하기위해서
    if (!inputLength && (value === "*" || value === "/")) return;
    // 연달은 연산자 입력 불가하게 하기 위해
    if (inputLength) {
      if (!Number(lastValue) && !Number(value)) return;
    }

    input.textContent += value;
  }
}

function doArithmetic(operator, value1, value2) {
  let result; // 결과를 저장할 변수

  // switch문을 사용하여 연산자에 따라 사칙연산을 수행
  switch (operator) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value2 - value1;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value2 / value1;
      break;
    default:
      alert("올바른 연산자를 입력하세요.");
      break;
  }
  return result;
}

// ! 변경된 후위표기법으로 계산하는 함수
function calPostFix(postfix) {
  let stack = [];
  postfix.forEach((item) => {
    if (Number(item)) {
      stack.push(item);
    } else {
      const value1 = stack.pop();
      const value2 = stack.pop();
      const result = doArithmetic(item, value1, value2);
      stack.push(result);
    }
  });
  return stack.pop();
}

// ! 우선순위 계산 함수
function priority(operator) {
  if (operator === "+" || operator === "-") {
    return 1;
  } else if (operator === "*" || operator === "/") {
    return 2;
  } else {
    return 0;
  }
}

// ! 후위표기법으로 변경
function toPostFix(inputStack) {
  let operatorStack = [];
  let postfix = []; // 후위표기법 stack
  for (let i = 0; i < inputStack.length; i++) {
    const value = inputStack[i];
    // 입력값이 숫자일때
    if (typeof value === "number") {
      postfix.push(value);
    }

    // 입력값이 연산자일 때
    else {
      if (!operatorStack.length) {
        operatorStack.push(value);
      } else {
        while (
          operatorStack.length > 0 &&
          priority(value) <= priority(operatorStack[operatorStack.length - 1])
        ) {
          postfix.push(operatorStack.pop());
        }
        operatorStack.push(value);
      }
    }

    if (i === inputStack.length - 1) {
      while (operatorStack.length) {
        postfix.push(operatorStack.pop());
      }
    }
  }
  return postfix;
}

// ! input.textContent의 내용을 array에 담는다. 숫자와 연산자 배열
function toArray(input) {
  // input은 string `30+4*7`
  let num = ""; // 피연산자
  let inputStack = [];
  const array = Array.from(input);
  array.forEach((item, index) => {
    if (index === 0 && (item === "+" || item === "-")) {
      num = num + item;
    } else if (Number(item) || item === ".") {
      // number이거나 소수점일 때
      num = num + item;
      console.log(num);
    } else {
      // 연산자를 만났을 때 숫자를 push할 수 있도록
      inputStack.push(Number(num));
      num = "";
      inputStack.push(item);
    }

    // 마지막 피연산자 stack에 push
    if (index === array.length - 1) {
      inputStack.push(Number(num));
    }
  });
  console.log(inputStack);
  return inputStack;
}

// ! calculate 함수
function calculate() {
  const inputStack = toArray(input.textContent);
  const postfix = toPostFix(inputStack);
  const result = calPostFix(postfix);
  output.textContent = result;
}

// 후위표기법으로 변경하는 방법
/*
    1. 피연산자는 스택에 넣지 않고 그냥 출력한다.
    2. 연산자는 스택이 비었으면 스택에 push한다.
    3. 연산자는 스택이 비어있지 않으면 스택에 있는 연산자와의 우선순위를 비교해
    스택에 있는 연산자의 우선순위가 같거나 크다면 스택에 있는 연산자를 pop을 한 후 
    출력한다. 
    4. 만약 3번에서 우선순위가 현재 연산자가 더 크면 현재 연산자를 push한다.
    5. 수식이 끝나면 스택이 빌 때 까지 pop을 한 후 출력한다. 
*/

// 후위표기법을 계산하는 방법 (calPostFix 함수)
/* 
    1. 피연산자가 들어오면 스택에 담기
    2. 연산자를 만나면 스택에서 두 개의 연산자를 꺼내서 연산한 뒤에 그결과를 스택에 담기
    3. 연산을 마친 뒤에 스택에 남아 있는 하나의 피연산자가 연산수행 결과가 됨
*/
