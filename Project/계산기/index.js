const buttons = document.querySelectorAll("button");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
let calculateClick = false;

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
      console.log("올바른 연산자를 입력하세요.");
      break;
  }
  return result;
}

function calPostFix(postfix) {
  let stack = [];
  postfix.forEach((item) => {
    if (typeof item === "number") {
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
      if (operatorStack.length === 0) {
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

// 우선순위 계산 함수
function priority(operator) {
  if (operator === "+" || operator === "-") {
    return 1;
  } else if (operator === "*" || operator === "/") {
    return 2;
  } else {
    return 0;
  }
}

function splitToArray(input) {
  // input은 string `30+4*7`
  let operand = ""; // 피연산자
  let inputStack = [];
  const array = Array.from(input);
  array.forEach((item, index) => {
    if (!Number.isNaN(Number(item))) {
      operand = operand + item;
    } else if (item === ".") {
      operand = operand + item;
    } else {
      // 연산자를 만났을 때 피연산자를 push할 수 있도록
      inputStack.push(Number(operand));
      operand = "";
      inputStack.push(item);
    }

    // 마지막 피연산자 stack에 push
    if (index === array.length - 1) {
      inputStack.push(Number(operand));
    }
  });
  return inputStack;
}

// ! calculate 함수
function calculate() {
  const inputStack = splitToArray(input.textContent);
  const postfix = toPostFix(inputStack);
  const result = calPostFix(postfix);
  output.textContent = result;
}

function btnClick(event) {
  const value = event.target.textContent;
  if (value === "C") {
    input.textContent = "";
    output.textContent = "";
    caluculateClick = false;
  }

  if (calculateClick) {
    // 이미 = 을 누른 상태에서 다음 키를 눌렀을 때 어떻게 동작할지
    if (Number.isNaN(Number(value))) {
      // 다음 키가 연산자일 때
      input.textContent = output.textContent;
      output.textContent = "";
    } else {
      // 다음키가 숫자일 때
      input.textContent = "";
      output.textContent = "";
    }
    calculateClick = false;
  }

  if (value === "=") {
    calculate();
    calculateClick = true;
  } else {
    const inputLength = input.textContent.length;
    const isCurrentValueOperator = Number.isNaN(Number(value));
    const isLastValueOperator = Number.isNaN(
      Number(input.textContent[inputLength - 1])
    );
    if (isCurrentValueOperator) {
      if (isLastValueOperator) return;
    }
    input.textContent += value;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", btnClick);
});

//
