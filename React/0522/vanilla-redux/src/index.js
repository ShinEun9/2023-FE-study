// import React from "react";
// import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

// ! WithoutRedux
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number"); // 수량
// const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
// const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

// const PRICE = 17500;

// let count = 0;

// //  UI Update - text
// const updateResult = (c) => {
//   number.innerText = c;
//   quantity.innerHTML = c;
//   totalPrice.innerHTML = c * PRICE;
// };

// // State Change
// const addNumber = () => {
//   count += 1;
//   if (count > 0) {
//     minus.disabled = false;
//   }
//   updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//   count -= 1;
//   if (count <= 0) {
//     minus.disabled = true;
//   }
//   updateResult(count);
// };

// // Init
// number.innerHTML = count;
// updateResult(count);

// // Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substractNumber);

// ! WithRedux
import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");
const PRICE = 17500;

// Action
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

// Action
const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });
};

// Reducer
const countReducer = (state = 0, action) => {
  // state 초기화
  switch (
    action.type // switch문
  ) {
    case "ADD":
      if (state >= 0) {
        minus.disabled = false;
      }
      return state + 1;
    case "SUBSTRACT":
      if (state <= 1) {
        minus.disabled = true;
      }
      return state - 1;
    default:
      return state;
  }
};

// create Store
const store = createStore(countReducer);

const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
};

// Update UI
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
