// const numberButton = document.querySelectorAll(".number-button-js");
// const output = document.querySelector(".output");
// const calculateButton = document.querySelectorAll(".calculate-button-js");
// const equalButton = document.querySelector(".equal-button");
// const resetButton = document.querySelector(".reset-button");
// let first = 0;
// let checkSecondInput = 0;

// function resetButtonClick() {
//   first = 0;
//   checkSecondInput = 0;
//   output.innerText = "0";
// }

// function handleEqualButtonClick() {
//   for (let a = 0; a < calculateButton.length; a++) {
//     if (calculateButton[a].classList.contains("clicked")) {
//       const b = calculateButton[a].innerText;
//       switch (b) {
//         case "+":
//           const c = first + parseInt(output.innerText);
//           output.innerText = c;
//           first = c;
//           break;
//         case "-":
//           const m = first - parseInt(output.innerText);
//           output.innerText = m;
//           first = m;
//           break;
//         case "*":
//           const mp = first * parseInt(output.innerText);
//           output.innerText = mp;
//           first = mp;
//           break;
//         case "/":
//           const d = first / parseInt(output.innerText);
//           output.innerText = d;
//           first = d;
//           break;
//         default:
//           console.log("I Cannnot Calculate");
//       }
//       calculateButton[a].classList.toggle("clicked");
//       break;
//     }
//   }
//   checkSecondInput = 0;
// }

// function clickedCheck() {
//   for (let a = 0; a < calculateButton.length; a++) {
//     if (calculateButton[a].classList.contains("clicked")) {
//       return true;
//       break;
//     }
//   }
// }
// function calculateButtonClick(event) {
//   const button = event.target;
//   if (clickedCheck()) {
//     handleEqualButtonClick();
//     button.classList.toggle("clicked");
//   } else {
//     button.classList.toggle("clicked");
//   }
// }

// function numberButtonClick(event) {
//   if (parseInt(output.innerText) === 0 && !clickedCheck()) {
//     output.innerText = event.target.innerText;
//     first = parseInt(output.innerText);
//   } else if (parseInt(output.innerText) !== 0 && !clickedCheck()) {
//     output.innerText = `${output.innerText}${event.target.innerText}`;
//     first = parseInt(output.innerText);
//   } else if (clickedCheck() && checkSecondInput === 0) {
//     output.innerText = "";
//     output.innerText = event.target.innerText;
//     checkSecondInput = 1;
//   } else {
//     output.innerText = `${output.innerText}${event.target.innerText}`;
//   }
// }

// function init() {
//   for (let i = 0; i < numberButton.length; i++) {
//     numberButton[i].addEventListener("click", numberButtonClick);
//   }
//   for (let a = 0; a < calculateButton.length; a++) {
//     calculateButton[a].addEventListener("click", calculateButtonClick);
//   }

//   equalButton.addEventListener("click", handleEqualButtonClick);
//   resetButton.addEventListener("click", resetButtonClick);
// }

// init();
